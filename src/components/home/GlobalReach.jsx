import { motion, useReducedMotion } from "framer-motion";
import { ease, BRAND } from "../../constants/brand";
import { Reveal } from "../shared/Reveal";
import WorldMap from "../../assets/World Map_Codexa.svg";

// Sample avatar images (using placeholder images)
const avatars = [
  { id: 1, src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&h=60&fit=crop&crop=face", position: { top: "32%", left: "28%" } },
  { id: 2, src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=60&h=60&fit=crop&crop=face", position: { top: "18%", left: "48%" } },
  { id: 3, src: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=60&h=60&fit=crop&crop=face", position: { top: "28%", left: "58%" } },
  { id: 4, src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=60&h=60&fit=crop&crop=face", position: { top: "35%", left: "52%" } },
];

// Placeholder markers (headphone icon style)
const markers = [
  { id: 1, position: { top: "25%", left: "22%" } },
  { id: 2, position: { top: "22%", left: "32%" } },
  { id: 3, position: { top: "20%", left: "72%" } },
  { id: 4, position: { top: "28%", left: "78%" } },
  { id: 5, position: { top: "42%", left: "55%" } },
];

function HeadphoneIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M3 18V12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12V18"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M21 19C21 20.1046 20.1046 21 19 21H18C16.8954 21 16 20.1046 16 19V16C16 14.8954 16.8954 14 18 14H21V19Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3 19C3 20.1046 3.89543 21 5 21H6C7.10457 21 8 20.1046 8 19V16C8 14.8954 7.10457 14 6 14H3V19Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function UserIcon({ hasCheck = true }) {
  return (
    <div className="relative">
      <div className="w-16 h-16 rounded-full bg-slate-100 flex items-center justify-center border-2 border-slate-200">
        <svg className="w-8 h-8 text-slate-400" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
        </svg>
      </div>
      {/* Badge */}
      <div
        className={`absolute -bottom-1 -right-1 w-6 h-6 rounded-full flex items-center justify-center border-2 border-white ${
          hasCheck ? "bg-white" : "bg-white"
        }`}
      >
        {hasCheck ? (
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke={BRAND.colors.navy} strokeWidth="2.5">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        ) : (
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke={BRAND.colors.navy} strokeWidth="2.5">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        )}
      </div>
    </div>
  );
}

export function GlobalReach() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="relative">
      {/* World Map Section */}
      <div className="relative mx-auto max-w-5xl">
        <Reveal>
          <div className="relative aspect-[2/1] w-full">
            {/* World Map Background */}
            <img
              src={WorldMap}
              alt="World Map"
              className="w-full h-full object-contain opacity-30"
            />

            {/* Avatar Markers */}
            {avatars.map((avatar, i) => (
              <motion.div
                key={avatar.id}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease, delay: 0.2 + i * 0.1 }}
                className="absolute"
                style={avatar.position}
              >
                <div className="relative">
                  <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-white shadow-lg">
                    <img
                      src={avatar.src}
                      alt={`Team member ${avatar.id}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {/* Connection dot */}
                  <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-slate-800 rounded-full" />
                </div>
              </motion.div>
            ))}

            {/* Headphone Markers */}
            {markers.map((marker, i) => (
              <motion.div
                key={marker.id}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease, delay: 0.4 + i * 0.08 }}
                className="absolute"
                style={marker.position}
              >
                <HeadphoneIcon className="w-6 h-6 text-slate-300" />
              </motion.div>
            ))}
          </div>
        </Reveal>
      </div>

      {/* Info Cards Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7, ease }}
        className="relative mx-auto max-w-4xl -mt-8 z-10"
      >
        <div className="bg-white rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.08)] border border-slate-100 overflow-hidden">
          <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-slate-100">
            {/* Card 1 - We have an IT department */}
            <div className="p-8 flex items-start gap-6">
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-slate-900" style={{ color: BRAND.colors.navy }}>
                  We have an IT department
                </h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                  Partner with us for IT management services to grow your existing IT infrastructure
                </p>
              </div>
              <UserIcon hasCheck={true} />
            </div>

            {/* Card 2 - We don't have an IT department */}
            <div className="p-8 flex items-start gap-6">
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-slate-900" style={{ color: BRAND.colors.navy }}>
                  We don't have an IT department
                </h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                  Work with us as your one-stop shop for IT management and solutions
                </p>
              </div>
              <UserIcon hasCheck={false} />
            </div>
          </div>

          {/* Bottom gradient bar */}
          <div className="h-1.5 bg-gradient-to-r from-slate-200 via-slate-300 to-slate-200" />
        </div>
      </motion.div>
    </div>
  );
}
