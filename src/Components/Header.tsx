import logo from '/src/assets/logo_filled.png';

export function Header() {
    return ( 
        <header>
            <nav className="bg-[#142c2c] px-4 lg:px-6 py-2.5">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    <a href="https://play.google.com/store/apps/details?id=com.rodriveiga10.quickcoords" className="flex items-center">
                        <img src={logo} className="mr-3 h-6 sm:h-16" alt="QuickCoords Logo" />
                        <span className="self-center text-3xl font-semibold whitespace-nowrap dark:text-[#c7e6e6]">QuickCoords</span>
                    </a>
                    {/* TODO: add links to pages */}
                </div>
            </nav>
        </header>
    )
}