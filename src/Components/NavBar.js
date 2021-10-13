const NavigationBar = () => {
    return (
        <>
            <nav class="bg-black h-16 w-full top-0 z-50 flex items-center justify-between py-3 absolute rounded-b-lg">
                <div class="text-white flex flex-row px-8 items-center justify-evenly w-full font-semibold">
                    <div class="">
                        <a href="/" class="flex flex-row">🏠 Home</a>
                    </div>
                    <div class="">
                        <a href="/about" class="flex flex-row">❓ About</a>
                    </div>
                    <div class="">
                        <a href="https://github.com/guangying94/hackbox-charity-website" class="flex flex-row">👨‍💻 Source Code</a>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default NavigationBar;