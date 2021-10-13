import aboutimg from './static/aboutimg.jpeg';
import profileimg from './static/profile.png';

const About = () => {
    return (
        <>
            <section class="text-gray-600 body-font">
                <div class="container px-5 py-24 mx-auto flex flex-col">
                    <div class="lg:w-4/6 mx-auto">
                        <div class="rounded-lg h-64 overflow-hidden">
                            <img alt="content" class="object-cover object-center h-full w-full" src={aboutimg}></img>
                        </div>
                        <div class="flex flex-col sm:flex-row mt-10">
                            <div class="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                                <div class="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400">
                                    <img src={profileimg} alt="img"></img>
                                </div>
                                <div class="flex flex-col items-center text-center justify-center">
                                    <h2 class="font-medium title-font mt-4 text-gray-900 text-lg">Marcus Tee</h2>
                                    <div class="w-12 h-1 bg-blue-500 rounded mt-2 mb-4"></div>
                                    <p class="text-base">Explorer, loves to get hands dirty to make technology works for better life.</p>
                                </div>
                            </div>
                            <div class="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                                <p class="leading-relaxed text-lg mb-4">I often received these flyers together with my utiltiies bill. I will keep them, and make donation to these organization as part of my social responsiblity. At society level, it helps those in needs, and at personal level, I enjoy 250% tax relief. Hence, there's no reason not to donate 😎</p>
                                <p class="leading-relaxed text-lg mb-4">I always wanted to build this site, and finally gotten the opportunity to build this, as part of my learning as well 👨‍💻 </p>
                                <p class="leading-relaxed text-lg mb-4">This site is built at personal capacity and it doesn't represent any organization, hence do verify the receipient before making donation. However, I welcome suggestion and add in new organization in the list too! 🤝  My contact is in <a href="https://github.com/guangying94">GitHub</a>.</p>
                                <a class="text-blue-500 inline-flex items-center" href="/">Donate Today
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default About;