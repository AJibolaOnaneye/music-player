import { MdHomeFilled } from "react-icons/md"
import { RiSearchFill } from "react-icons/ri"
import { RiCompassFill } from "react-icons/ri"
import { BsFillBookmarkDashFill } from "react-icons/bs"
import { MdPerson } from "react-icons/md"
import { BsClockFill } from "react-icons/bs"
import { FaHeart } from "react-icons/fa"
import { FaFolderMinus } from "react-icons/fa"
import { BiFile } from "react-icons/bi"
import { MdAddBox } from "react-icons/md"
import { RiSettings3Fill } from "react-icons/ri"
import { MdLogout } from "react-icons/md"





export const MenuCategory = [
   {
   name: "Home",
   icon: <MdHomeFilled />,
   link: "/"
   },
   {
   name: "Search",
   icon: <RiSearchFill />,
   link:'/search'
   },
   {
   name: "Discover",
   icon: <RiCompassFill />
   },
   {
   name: "Albums",
   icon: <BsFillBookmarkDashFill />
   },
   {
   name: "Artists",
   icon: <MdPerson />
   },
]
export const LibraryCategory = [
   {
   name: "Recent",
   icon: <BsClockFill />
   },
   {
   name: "Favourites",
   icon: <FaHeart />
   },
   {
   name: "Local",
   icon: <FaFolderMinus/>
   },
]

export const PlaylistCategory = [
   {
   name: "Create New",
   icon: <MdAddBox />
   },
   {
   name: "Pop Punk",
   icon: <BiFile />
   },
   {
   name: "Rocks",
   icon: <BiFile />
   },
]

export const GeneralCategory = [
   {
   name: "Settings",
   icon: <RiSettings3Fill />
   },
   {
   name: "Log Out",
   icon: <MdLogout />
   },
]

export const StationCategory = [
    {
    name: "Music",
    },

    {
    name: "Podcast",
    },

    {
    name: "Live",
    },

    {
    name: "Radio",
    },
 ]