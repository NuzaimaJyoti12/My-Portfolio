// "use client";

// import { useEffect, useState } from "react";

// export default function Preloader() {
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const timer = setTimeout(() => setLoading(false), 3000);
//     return () => clearTimeout(timer);
//   }, []);

//   if (!loading) return null;

//   return (
//     <>
//       <style jsx>{`
//         @keyframes puzzleMove {
//           0% {
//             transform: translate(0, 0);
//           }
//           25% {
//             transform: translate(-100%, 0);
//           }
//           50% {
//             transform: translate(-100%, 100%);
//           }
//           75% {
//             transform: translate(0, 100%);
//           }
//           100% {
//             transform: translate(0, 0);
//           }
//         }

//         .box {
//           width: 64px;
//           height: 64px;
//           position: absolute;
//           background-color: white;
//           border-radius: 0.5rem;
//           box-shadow: 0 0 12px rgba(0, 153, 255, 0.7);
//         }

//         .box-0 {
//           top: 0;
//           left: 0;
//           animation: puzzleMove 3s infinite;
//         }

//         .box-1 {
//           top: 0;
//           left: 80px;
//           animation: puzzleMove 3s infinite;
//           animation-delay: 0.75s;
//         }

//         .box-2 {
//           top: 80px;
//           left: 80px;
//           animation: puzzleMove 3s infinite;
//           animation-delay: 1.5s;
//         }

//         .box-3 {
//           top: 80px;
//           left: 0;
//           animation: puzzleMove 3s infinite;
//           animation-delay: 2.25s;
//         }
//       `}</style>

//       <div className="fixed inset-0 z-50 flex items-center justify-center bg-black">
//         <div className="relative w-[160px] h-[160px]">
//           <div className="box box-0" />
//           <div className="box box-1" />
//           <div className="box box-2" />
//           <div className="box box-3" />

//           {/* Neon J shadow */}
//           <div className="absolute bottom-1 right-3 text-sm font-semibold tracking-wide opacity-70 pointer-events-none">
//             <span className="text-transparent drop-shadow-[0_0_8px_rgba(0,0,255,0.7)]">
//               J
//             </span>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }
