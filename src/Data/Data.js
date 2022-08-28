import {
    UilEstate,
    UilClipboardAlt,
    UilUsersAlt,
    UilPackage,
    UilChart,
    UilSignOutAlt,
    UilUsdSquare,
    UilMoneyWithdrawal
} from "@iconscout/react-unicons"

// Recent Card Imports
import img1 from "../imgs/img1.png";
import img2 from "../imgs/img2.png";
import img3 from "../imgs/img3.png";

//Sidebar Data
export const SidebarData = [
    {
        icon: UilEstate,
        heading: "Dashboard"
    },
    {
        icon: UilClipboardAlt,
        heading: "Orders"
    },
    {
        icon: UilUsersAlt,
        heading: "Customers"
    },
    {
        icon: UilPackage,
        heading: "Products"
    },
    {
        icon: UilChart,
        heading: "Analytics"
    }
];

export const CardsData = [
    {
        title: "Sales",
        color: {
            backGround: "linear-gradient(180deg, #bb67ff 0%, #c484f3 100%",
            boxShadow: "0px 10px 20px 0px #e8c6f5"
        },
        barValue: 70,
        value: "20,430",
        png: UilUsdSquare,
        series: [
            {
                name: "Sales",
                data: [31, 40, 28, 51, 42, 109, 100]
            }
        ]
    },
    {
        title: "Revenue",
        color: {
            backGround: "linear-gradient(180deg, #FF919D 0%, #FC929D 100%",
            boxShadow: "0px 10px 20px 0px #FDC0C7"
        },
        barValue: 80,
        value: "12,390",
        png: UilMoneyWithdrawal,
        series: [
            {
                name: "Revenue",
                data: [10, 100, 50, 70, 80, 30, 40]
            }
        ]
    },
    {
        title: "Expenses",
        color: {
            backGround: "linear-gradient(rgb(248, 212, 154) -146.42%, rgb(255 202 113) -46.42%)",
            boxShadow: "0px 10px 20px 0px #F9D59B"
        },
        barValue: 60,
        value: "5,120",
        png: UilClipboardAlt,
        series: [
            {
                name: "Expenses",
                data: [10, 25, 15, 30, 12, 15, 20]
            }
        ]
    }
];

// Recent Update Card Data
export const UpdatesData = [
    {
        img: img1,
        name: "Adila Ayad",
        notification: "Has ordered Apple smart watch 2500mAh battery.",
        time: "12 seconds ago",
    },
    {
        img: img2,
        name: "Sophie Wang",
        notification: "Has received Samsung gadget for charging battery.",
        time: "15 minutes ago",
    },
    {
        img: img3,
        name: "Ethan Smith",
        notification: "Has ordered Apple smart watch, samsung Gear 2500mAh battery.",
        time: "2 hours ago",
    },
];