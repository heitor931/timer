import Link from "next/link";
import { ModeToggle } from "./ModeToggle";

function Header() {
    return (
        <div className="flex items-center justify-between h-16 bg-gray-800  px-6">
            <Link href={"/"} className="flex items-center gap-4">
                <span className="text-2xl font-bold tracking-tight">Timer App</span>
            </Link>
            <div className="flex items-center gap-4">
                <Link href={"/signup"} className="px-4 py-2 rounded-md bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 transition-colors font-semibold shadow">
                    Sign Up
                </Link>
                <Link href={"/signin"} className="px-4 py-2 rounded-md border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white transition-colors font-semibold shadow">
                    Login
                </Link>
                <ModeToggle />
            </div>
        </div>
    );
}

export default Header;