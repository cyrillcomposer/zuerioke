import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { getDateStatus, AvailabilityStatus } from '../data/availability';
import { useTranslations } from '../translations';

interface CalendarProps {
  onDateSelect: (date: string) => void;
}

export default function Calendar({ onDateSelect }: CalendarProps) {
  const t = useTranslations();
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const [currentMonth, setCurrentMonth] = useState(today.getMonth());
  const [currentYear, setCurrentYear] = useState(today.getFullYear());
  const [direction, setDirection] = useState(0);

  const isCurrentMonth = currentMonth === today.getMonth() && currentYear === today.getFullYear();

  function goToPrevMonth() {
    if (isCurrentMonth) return;
    setDirection(-1);
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  }

  function goToNextMonth() {
    setDirection(1);
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  }

  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  // Monday-first: convert Sunday=0 to 6, Monday=1 to 0, etc.
  const firstDayOfWeek = (new Date(currentYear, currentMonth, 1).getDay() + 6) % 7;

  const days: (number | null)[] = [];
  for (let i = 0; i < firstDayOfWeek; i++) {
    days.push(null);
  }
  for (let d = 1; d <= daysInMonth; d++) {
    days.push(d);
  }

  function formatDateStr(day: number): string {
    const m = String(currentMonth + 1).padStart(2, '0');
    const d = String(day).padStart(2, '0');
    return `${currentYear}-${m}-${d}`;
  }

  function isPast(day: number): boolean {
    const date = new Date(currentYear, currentMonth, day);
    return date < today;
  }

  function getStatusStyles(status: AvailabilityStatus, past: boolean) {
    if (past) {
      return {
        bg: '',
        dot: 'bg-gray-600',
        text: 'text-gray-600',
        clickable: false,
      };
    }
    switch (status) {
      case 'available':
        return {
          bg: 'bg-emerald-500/15 hover:bg-emerald-500/25 border-emerald-500/40',
          dot: 'bg-emerald-500',
          text: 'text-white',
          clickable: true,
        };
      case 'limited':
        return {
          bg: 'bg-amber-500/15 hover:bg-amber-500/25 border-amber-500/40',
          dot: 'bg-amber-500',
          text: 'text-white',
          clickable: true,
        };
      case 'booked':
        return {
          bg: 'bg-red-500/10 border-red-500/30',
          dot: 'bg-red-500',
          text: 'text-gray-500',
          clickable: false,
        };
    }
  }

  const monthKey = `${currentYear}-${currentMonth}`;

  return (
    <div className="max-w-lg mx-auto">
      <div className="bg-white/5 backdrop-blur-sm border border-[#D4AF37]/10 rounded-3xl p-6 md:p-8">
        {/* Month navigation */}
        <div className="flex items-center justify-between mb-6">
          <button
            onClick={goToPrevMonth}
            disabled={isCurrentMonth}
            className={`p-2 rounded-full transition-colors ${
              isCurrentMonth
                ? 'text-gray-600 cursor-not-allowed'
                : 'text-[#D4AF37] hover:bg-[#D4AF37]/10'
            }`}
            aria-label={t.calendar.previousMonth}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <h3 className="text-xl font-bold text-white">
            {t.calendar.months[currentMonth]} {currentYear}
          </h3>
          <button
            onClick={goToNextMonth}
            className="p-2 rounded-full text-[#D4AF37] hover:bg-[#D4AF37]/10 transition-colors"
            aria-label={t.calendar.nextMonth}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Weekday headers */}
        <div className="grid grid-cols-7 gap-1 mb-2">
          {t.calendar.weekdays.map((day: string) => (
            <div key={day} className="text-center text-xs font-medium text-gray-400 py-2">
              {day}
            </div>
          ))}
        </div>

        {/* Day grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={monthKey}
            initial={{ opacity: 0, x: direction * 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: direction * -50 }}
            transition={{ duration: 0.2 }}
            className="grid grid-cols-7 gap-1"
          >
            {days.map((day, i) => {
              if (day === null) {
                return <div key={`empty-${i}`} className="aspect-square" />;
              }

              const dateStr = formatDateStr(day);
              const past = isPast(day);
              const status = past ? 'booked' : getDateStatus(dateStr);
              const styles = getStatusStyles(status, past);

              return (
                <motion.button
                  key={dateStr}
                  whileHover={styles.clickable ? { scale: 1.1 } : undefined}
                  whileTap={styles.clickable ? { scale: 0.95 } : undefined}
                  onClick={() => styles.clickable && onDateSelect(dateStr)}
                  disabled={!styles.clickable}
                  className={`aspect-square rounded-xl border flex flex-col items-center justify-center gap-1 transition-all duration-200 ${
                    styles.clickable ? 'cursor-pointer' : 'cursor-not-allowed'
                  } ${styles.bg} ${styles.text}`}
                >
                  <span className="text-sm font-medium">{day}</span>
                  <span className={`w-1.5 h-1.5 rounded-full ${styles.dot}`} />
                </motion.button>
              );
            })}
          </motion.div>
        </AnimatePresence>

        {/* Legend */}
        <div className="flex flex-wrap justify-center gap-4 mt-6 pt-4 border-t border-white/10">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
            <span className="text-xs text-gray-400">{t.calendar.available}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
            <span className="text-xs text-gray-400">{t.calendar.limited}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500" />
            <span className="text-xs text-gray-400">{t.calendar.booked}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
