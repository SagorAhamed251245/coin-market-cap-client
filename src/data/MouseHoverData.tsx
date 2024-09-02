import UpcomingSvg from "@/Components/shared/svg/UpcomingSvg";
import { MenuData } from "@/types/menuHoverItemTypes";
import Image from "next/image";

export const cryptocurrenciesMouseHoverData: MenuData = [
  {
    title: "Cryptocurrencies",
    items: [
      {
        key: "ranking",
        label: "Ranking",
        icon: (
          <Image
            loading="lazy"
            decoding="async"
            className="sc-8a128ed-0 bBumlM"
            alt=""
            width={32}
            height={32}
            src="https://s2.coinmarketcap.com/static/cloud/img/menu/MenuCmcIcon.svg"
          ></Image>
        ),
      },
      {
        key: "categories",
        label: "Categories",
        icon: (
          <Image
            alt=""
            width={32}
            height={32}
            loading="lazy"
            decoding="async"
            className="sc-8a128ed-0 bBumlM"
            src="https://s2.coinmarketcap.com/static/cloud/img/menu/MenuCategoriesIcon.svg"
          ></Image>
        ),
      },
      {
        key: "global-charts",
        label: "Global Charts",
        icon: (
          <Image
            alt=""
            width={32}
            height={32}
            loading="lazy"
            decoding="async"
            className="sc-8a128ed-0 bBumlM"
            src="https://s2.coinmarketcap.com/static/cloud/img/menu/MenuGlobalChartsIcon.svg"
          ></Image>
        ),
      },
      {
        key: "historical-snapshots",
        label: "Historical Snapshots",
        icon: (
          <Image
            alt=""
            width={32}
            height={32}
            loading="lazy"
            decoding="async"
            className="sc-8a128ed-0 bBumlM"
            src="https://s2.coinmarketcap.com/static/cloud/img/menu/MenuHistoryIcon.svg"
          ></Image>
        ),
      },
      {
        key: "bitcoin-etfs",
        label: "Bitcoin ETFs",
        icon: (
          <Image
            alt=""
            width={32}
            height={32}
            loading="lazy"
            decoding="async"
            className="sc-8a128ed-0 bBumlM"
            src="https://s2.coinmarketcap.com/static/cloud/img/menu/MenuBitcoinETFsIcon.svg"
          ></Image>
        ),
      },
      {
        key: "token-unlocks",
        label: "Token Unlocks",
        icon: (
          <Image
            alt=""
            width={32}
            height={32}
            loading="lazy"
            decoding="async"
            className="sc-8a128ed-0 bBumlM"
            src="https://s2.coinmarketcap.com/static/cloud/img/menu/MenuTokenUnlocksIcon.svg"
          ></Image>
        ),
      },
    ],
  },
  {
    title: "Leaderboards",
    items: [
      {
        key: "trending",
        label: "Trending",
        icon: (
          <Image
            alt=""
            width={32}
            height={32}
            loading="lazy"
            decoding="async"
            className="sc-8a128ed-0 bBumlM"
            src="https://s2.coinmarketcap.com/static/cloud/img/menu/MenuTrendingIcon.svg"
          ></Image>
        ),
      },
      {
        key: "upcoming",
        label: "Upcoming",
        icon: (
          <Image
            alt=""
            width={32}
            height={32}
            loading="lazy"
            decoding="async"
            className="sc-8a128ed-0 bBumlM"
            src="https://s2.coinmarketcap.com/static/cloud/img/menu/MenuUpcomingIconV2.svg"
          ></Image>
        ),
      },
      {
        key: "recently-added",
        label: "Recently Added",
        icon: (
          <Image
            alt=""
            width={32}
            height={32}
            loading="lazy"
            decoding="async"
            className="sc-8a128ed-0 bBumlM"
            src="https://s2.coinmarketcap.com/static/cloud/img/menu/MenuRecentlyAddedIcon.svg"
          ></Image>
        ),
      },
      {
        key: "gainers-losers",
        label: "Gainers & Losers",
        icon: (
          <Image
            alt=""
            width={32}
            height={32}
            loading="lazy"
            decoding="async"
            className="sc-8a128ed-0 bBumlM"
            src="https://s2.coinmarketcap.com/static/cloud/img/menu/MenuGainersLosersIcon.svg"
          ></Image>
        ),
      },
      {
        key: "most-visited",
        label: "Most Visited",
        icon: (
          <Image
            alt=""
            width={32}
            height={32}
            loading="lazy"
            decoding="async"
            className="sc-8a128ed-0 bBumlM"
            src="https://s2.coinmarketcap.com/static/cloud/img/menu/MenuCategoriesIcon.svg"
          ></Image>
        ),
      },
    ],
  },
  {
    title: "NFT",
    items: [
      {
        key: "overall-nft-stats",
        label: "Overall NFT Stats",
        icon: (
          <Image
            alt=""
            width={32}
            height={32}
            loading="lazy"
            decoding="async"
            className="sc-8a128ed-0 bBumlM"
            src="https://s2.coinmarketcap.com/static/cloud/img/menu/MenuNFTOverviewV2.svg"
          ></Image>
        ),
      },
      {
        key: "upcoming-sales",
        label: "Upcoming Sales",
        icon: (
          <div>
            {" "}
            <UpcomingSvg />
          </div>
        ),
      },
    ],
  },
  {
    title: "On Chain Data",
    items: [
      {
        key: "dex-pairs",
        label: "DEX Pairs",
        icon: (
          <Image
            alt=""
            width={32}
            height={32}
            loading="lazy"
            decoding="async"
            className="sc-8a128ed-0 bBumlM"
            src="https://s2.coinmarketcap.com/static/cloud/img/menu/MenuDexscan.svg"
          ></Image>
        ),
      },
      {
        key: "chain-ranking",
        label: "Chain Ranking",
        icon: (
          <Image
            alt=""
            width={32}
            height={32}
            loading="lazy"
            decoding="async"
            className="sc-8a128ed-0 bBumlM"
            src="https://s2.coinmarketcap.com/static/cloud/img/menu/MenuChainRanking.svg"
          ></Image>
        ),
      },
      {
        key: "hot-dex-pairs",
        label: "Hot DEX Pairs",
        icon: (
          <Image
            alt=""
            width={32}
            height={32}
            loading="lazy"
            decoding="async"
            className="sc-8a128ed-0 bBumlM"
            src="https://s2.coinmarketcap.com/static/cloud/img/menu/MenuHottestDexPairs.svg"
          ></Image>
        ),
      },
    ],
  },
];

export const exchangesMouseHoverData: MenuData = [
  {
    title: "Centralized Exchanges",
    items: [
      {
        key: "Spot",
        label: "Spot",
        icon: (
          <Image
            alt=""
            width={32}
            height={32}
            loading="lazy"
            decoding="async"
            className="icon-style"
            src="https://s2.coinmarketcap.com/static/cloud/img/menu/MenuSpotIcon.svg"
          ></Image>
        ),
      },
      {
        key: "Derivatives",
        label: "Derivatives",
        icon: (
          <Image
            alt=""
            width={32}
            height={32}
            loading="lazy"
            decoding="async"
            className="icon-style"
            src="https://s2.coinmarketcap.com/static/cloud/img/menu/MenuDerivativesIcon.svg"
          ></Image>
        ),
      },
    ],
  },
  {
    title: "Decentralized Exchanges",
    items: [
      {
        key: "Spot",
        label: "Spot",
        icon: (
          <Image
            alt=""
            width={32}
            height={32}
            loading="lazy"
            decoding="async"
            className="icon-style"
            src="https://s2.coinmarketcap.com/static/cloud/img/menu/MenuDexSpotIcon.svg"
          ></Image>
        ),
      },
      {
        key: "Derivatives",
        label: "Derivatives",
        icon: (
          <Image
            alt=""
            width={32}
            height={32}
            loading="lazy"
            decoding="async"
            className="icon-style"
            src="https://s2.coinmarketcap.com/static/cloud/img/menu/MenuDexDerivativesIcon.svg"
          ></Image>
        ),
      },
    ],
  },
];

export const communityMouseHoverData: MenuData = [
  {
    items: [
      {
        key: "feeds",
        label: "Feeds",
        icon: (
          <Image
            alt=""
            width={32}
            height={32}
            loading="lazy"
            decoding="async"
            className="icon-style"
            src="https://s2.coinmarketcap.com/static/cloud/img/menu/feed.svg"
          ></Image>
        ),
      },
      {
        key: "topics",
        label: "Topics",
        icon: (
          <Image
            alt=""
            width={32}
            height={32}
            loading="lazy"
            decoding="async"
            className="icon-style"
            src="https://s2.coinmarketcap.com/static/cloud/img/menu/topics.svg"
          ></Image>
        ),
      },
      {
        key: "lives",
        label: "Lives",
        icon: (
          <Image
            alt=""
            width={32}
            height={32}
            loading="lazy"
            decoding="async"
            className="icon-style"
            src="https://s2.coinmarketcap.com/static/cloud/img/menu/lives.svg"
          ></Image>
        ),
      },
      {
        key: "articles",
        label: "Articles",
        icon: (
          <Image
            alt=""
            width={32}
            height={32}
            loading="lazy"
            decoding="async"
            className="icon-style"
            src="https://s2.coinmarketcap.com/static/cloud/img/menu/articles.svg"
          ></Image>
        ),
      },
    ],
  },
];

export const productsMouseHoverData: MenuData = [
  {
    title: "Products",
    items: [
      {
        key: "converter",
        label: "Converter",
        icon: (
          <Image
            alt=""
            width={32}
            height={32}
            loading="lazy"
            decoding="async"
            className="icon-style"
            src="https://s2.coinmarketcap.com/static/cloud/img/menu/MenuConverterIcon.svg"
          ></Image>
        ),
      },
      {
        key: "newsletter",
        label: "Newsletter",
        icon: (
          <Image
            alt=""
            width={32}
            height={32}
            loading="lazy"
            decoding="async"
            className="icon-style"
            src="https://s2.coinmarketcap.com/static/cloud/img/menu/MenuNewsIcon.svg"
          ></Image>
        ),
      },
      {
        key: "CMC-Lab",
        label: "CMC Lab",
        icon: (
          <Image
            alt=""
            width={32}
            height={32}
            loading="lazy"
            decoding="async"
            className="icon-style"
            src="https://s2.coinmarketcap.com/static/cloud/img/menu/MenuExplorerIcon.svg"
          ></Image>
        ),
      },
      {
        key: "telegram-bot",
        label: "Telegram Bot",
        icon: (
          <Image
            alt=""
            width={32}
            height={32}
            loading="lazy"
            decoding="async"
            className="icon-style"
            src="https://s2.coinmarketcap.com/static/cloud/img/menu/MenuTelegramBotIcon.svg"
          ></Image>
        ),
      },
      {
        key: "advertise",
        label: "Advertise",
        icon: (
          <Image
            alt=""
            width={32}
            height={32}
            loading="lazy"
            decoding="async"
            className="icon-style"
            src="https://s2.coinmarketcap.com/static/cloud/img/menu/MenuAdvertiseIcon.svg"
          ></Image>
        ),
      },
    ],
  },
  {
    title: "Widgets",
    items: [
      {
        key: "crypto-api",
        label: "Crypto API",
        icon: (
          <Image
            alt=""
            width={32}
            height={32}
            loading="lazy"
            decoding="async"
            className="icon-style"
            src="https://s2.coinmarketcap.com/static/cloud/img/menu/MenuCryptoApiIcon.light.svg"
          ></Image>
        ),
      },
      {
        key: "site-widgets",
        label: "Site Widgets",
        icon: (
          <Image
            alt=""
            width={32}
            height={32}
            loading="lazy"
            decoding="async"
            className="icon-style"
            src="https://s2.coinmarketcap.com/static/cloud/img/menu/MenuWidgetsIcon.light.svg"
          ></Image>
        ),
      },
    ],
  },
  {
    title: "Campaigns",
    items: [
      {
        key: "airdrops",
        label: "Airdrops",
        icon: (
          <Image
            alt=""
            width={32}
            height={32}
            loading="lazy"
            decoding="async"
            className="icon-style"
            src="https://s2.coinmarketcap.com/static/cloud/img/menu/MenuAirdropsIcon.svg"
          ></Image>
        ),
      },
      {
        key: "diamond-rewards",
        label: "Diamond Rewards",
        icon: (
          <Image
            alt=""
            width={32}
            height={32}
            loading="lazy"
            decoding="async"
            className="icon-style"
            src="https://s2.coinmarketcap.com/static/cloud/img/menu/MenuRewardsIcon.svg"
          ></Image>
        ),
      },
      {
        key: "learn-and-earn",
        label: "Learn & Earn",
        icon: (
          <Image
            alt=""
            width={32}
            height={32}
            loading="lazy"
            decoding="async"
            className="icon-style"
            src="https://s2.coinmarketcap.com/static/cloud/img/menu/MenuEarnCryptoIcon.svg"
          ></Image>
        ),
      },
    ],
  },
  {
    title: "Calendars",
    items: [
      {
        key: "ICO Calendar",
        label: "ICO Calendar",
        icon: (
          <Image
            alt=""
            width={32}
            height={32}
            loading="lazy"
            decoding="async"
            className="icon-style"
            src="https://s2.coinmarketcap.com/static/cloud/img/menu/MenuICOIcon.svg"
          ></Image>
        ),
      },
      {
        key: "Events Calendar",
        label: "Events Calendar",
        icon: (
          <Image
            alt=""
            width={32}
            height={32}
            loading="lazy"
            decoding="async"
            className="icon-style"
            src="https://s2.coinmarketcap.com/static/cloud/img/menu/MenuCategoriesIcon.svg"
          ></Image>
        ),
      },
    ],
  },
];
