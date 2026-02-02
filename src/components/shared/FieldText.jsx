import { motion, useReducedMotion } from "framer-motion";
import { ease } from "../../constants/brand";

export function FieldText({ label, placeholder, rows = 4 }) {
  const reduceMotion = useReducedMotion();
  return (
    <label className="grid gap-2">
      <span className="text-xs font-semibold text-slate-600">{label}</span>
      <motion.textarea
        whileFocus={reduceMotion ? undefined : { scale: 1.005 }}
        transition={{ duration: 0.2, ease }}
        placeholder={placeholder}
        rows={rows}
        className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 outline-none transition focus:border-slate-300"
      />
    </label>
  );
}
