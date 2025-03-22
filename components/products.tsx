import React from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import ProductCard from "./product-card";

const ProductsSection = () => {
  const { ref: productsRef, inView: productsInView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const products = [
    {
      id: "portafo",
      name: "Portafo",
      icon: "P",
      iconBg: "#64748b",
      category: "FRAMER TEMPLATE",
      url: "#",
    },
    {
      id: "faktur",
      name: "Faktur Invoice",
      icon: "F",
      iconBg: "#94a3b8",
      category: "FRAMER TEMPLATE",
      url: "#",
    },
    {
      id: "goven",
      name: "Goven",
      icon: "G",
      iconBg: "#6366f1",
      category: "FRAMER TEMPLATE",
      url: "#",
    },
    {
      id: "subtle",
      name: "Subtle Folio",
      icon: "S",
      iconBg: "#d4d4d8",
      category: "FRAMER TEMPLATE",
      url: "#",
    },
  ];
  return (
    <motion.section
      ref={productsRef}
      className="bg-zinc-100 dark:bg-[#2c2c2c] rounded-xl p-6 mb-6"
      initial={{ opacity: 0, y: 30 }}
      animate={{
        opacity: productsInView ? 1 : 0.5,
        y: productsInView ? 0 : 30,
      }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="flex items-center mb-6">
        <span className="h-2 w-2 bg-zinc-500 rounded-full mr-2"></span>
        <span className="text-zinc-600 dark:text-zinc-400">Products</span>
      </div>

      <div className="space-y-3 mt-6">
        {products.map((product, index) => (
          <ProductCard
            inView={productsInView}
            product={product}
            index={index}
            key={product.id}
          />
        ))}
      </div>
    </motion.section>
  );
};

export default ProductsSection;
