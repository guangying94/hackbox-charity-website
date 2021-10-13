import heroimage from './static/heroimage.jpeg';

const HeroBar = () => {
    return (
        <>
            <section class="text-gray-600 body-font">
                <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                    <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                        <img class="object-cover object-center rounded" alt="hero" src={heroimage} />
                    </div>
                    <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                        <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Giving Back to Society
                        </h1>
                        <p class="mb-8 leading-relaxed">You can make a difference in less than a minute💕</p>
                        <p class="mb-8 leading-relaxed">This site contains a list of charity that supports donation via PayNow. Make sure you verify the recipient (UEN Number, Name) before making donation. This is a non-profit project for better society!</p>
                        <div class="flex justify-center">
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default HeroBar;