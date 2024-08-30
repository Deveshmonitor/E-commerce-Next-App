import {
  MagnifyingGlassIcon,
  PhoneIcon,
  ShoppingBagIcon,
  UserIcon,
} from "@heroicons/react/24/solid";

export const webisteData = {
  name: "Shopcart",
  menuItems: [
    {
      label: "Account",
      href: "/account",
      icons: <UserIcon className="size-4" />,
    },
    {
      label: "Cart",
      href: "/cart",
      icons: <ShoppingBagIcon className="size-4" />,
    },
  ],
  currency: "₹ ",
};
