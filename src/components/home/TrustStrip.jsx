import { motion } from "framer-motion";
import { ShieldCheck, Clock3, Headphones, Layers } from "lucide-react";
import { BRAND, ease } from "../../constants/brand";
import { cn } from "../../utils/helpers";

export function TrustStrip() {
  const items = [
    { icon: ShieldCheck, t: "Secure practices", stat: "100% Safe" },
    { icon: Clock3, t: "On-time delivery", stat: "98% Success" },
    { icon: Headphones, t: "24/7 Support", stat: "< 1hr Response" },
    { icon: Layers, t: "500+ Projects", stat: "Delivered" },
  ];

  return (
    <div className="rounded-2xl border border-slate-200 bg-gradient-to-br from-white to-slate-50 shadow-lg">
      <div className="grid gap-0 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((it, i) => {
          const Icon = it.icon;
          return (
            <motion.div
              key={it.t}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-120px" }}
              transition={{ duration: 0.6, ease, delay: i * 0.05 }}
              className={cn(
                "group flex items-center gap-4 px-6 py-6 transition-all hover:bg-white",
                "border-slate-200",
                i % 2 === 1 ? "sm:border-l" : "",
                i >= 2 ? "lg:border-l" : "",
                i >= 2 ? "sm:border-t lg:border-t-0" : "",
                i === 1 ? "sm:border-t-0" : ""
              )}
            >
              <div 
                className="grid h-12 w-12 shrink-0 place-items-center rounded-xl border border-slate-200 bg-white shadow-sm transition-transform group-hover:scale-110"
                style={{ boxShadow: `0 4px 14px ${BRAND.primary}15` }}
              >
                <Icon className="h-5 w-5" style={{ color: BRAND.primary }} />
              </div>
              <div>
                <div className="text-sm font-bold text-slate-900">{it.t}</div>
                <div className="text-xs font-semibold" style={{ color: BRAND.primary }}>{it.stat}</div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
