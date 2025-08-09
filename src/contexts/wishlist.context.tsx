"use client";

import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import Product from "../interfaces/product.interface";

interface WishlistContextType {
  wishlist: Product[];
  handleWishlist: (product: Product) => void;
}

const WishlistContext = createContext<WishlistContextType | undefined>(
  undefined
);

export default function WishlistProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [wishlist, setWishlist] = useState<Product[]>([]);

  function handleWishlist(product: Product) {
    const exists = wishlist.some((p) => p._id === product._id);
    const updated = exists
      ? wishlist.filter((p) => p._id !== product._id)
      : [...wishlist, product];

    setWishlist(updated);
    localStorage.setItem("wishlist", JSON.stringify(updated));
  }

  useEffect(() => {
    const stored = localStorage.getItem("wishlist");
    if (stored) setWishlist(JSON.parse(stored));
  }, []);

  useEffect(() => {
    console.log("wishlist changed:", wishlist);
  }, [wishlist]);

  return (
    <WishlistContext.Provider value={{ wishlist, handleWishlist }}>
      {children}
    </WishlistContext.Provider>
  );
}

export function useWishlist() {
  const context = useContext(WishlistContext);
  if (!context) {
    throw new Error("useWishlist must be used within WishlistProvider");
  }
  return context;
}
