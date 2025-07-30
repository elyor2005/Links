import { cn } from "../Components/utils/cn";
import { motion } from "framer-motion";
export function ElegantImage({
  src,
  alt = "Animated image",
  className,
  delay = 0,
  width = 400,
  height = 100,
  rotate = 0,
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: -150,
        rotate: rotate - 15,
      }}
      animate={{
        opacity: 1,
        y: 0,
        rotate: rotate,
      }}
      transition={{
        duration: 2.4,
        delay,
        ease: [0.23, 0.86, 0.39, 0.96],
        opacity: { duration: 1.2 },
      }}
      className={cn("absolute", className)}
    >
      <motion.div
        animate={{
          y: [0, 15, 0],
        }}
        transition={{
          duration: 12,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        style={{
          width,
          height,
        }}
        className="relative overflow-hidden rounded-xl"
      >
        <img
          src={src}
          alt={alt}
          className="w-full h-full   shadow-lg object-contain "
        />
      </motion.div>
    </motion.div>
  );
}
