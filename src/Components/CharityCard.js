const Card = (props) => {
    return (
        <>
            <div class=" w-5/6 lg:w-1/4 lg:h-1/3 rounded-lg bg-gray-300 text-center flex flex-col self-center p-2 pb-4 filter drop-shadow-xl">
                <div class="w-full py-2 font-bold text-2xl break-words">
                    {props.name}
                </div>
                <div class="w-11/12 self-center">
                    <img class="object-contain w-full h-full" alt="qrcode" src={props.qrcode}></img>
                </div>
                <div class="text-gray-600 font-lg font-light text-sm">
                    UEN
                </div>
                <div class="text-base pb-2">
                    {props.uen}
                </div>
                <div class="text-gray-600 font-lg font-light text-sm">
                    Tax Deduction Details
                </div>
                <div class="text-base pb-2">
                    {props.tax}
                </div>
                <div class="bg-blue-300 rounded-lg mx-16 text-md font-semibold hover:bg-blue-500 hover:text-gray-50">
                    <a href={props.website}>Website</a>
                </div>
            </div>
        </>
    );
};

export default Card;