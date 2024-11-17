interface quoteType {
    quote: string; 
}

const Quote = ({quote} : quoteType) => {
  return (
    <>
        <div className="bg-gray-300 h-screen flex justify-center flex-col ">
            <div className="flex justify-center">
                <div className="max-w-md ">
                    <div className="text-3xl font-bold items-center ">
                    {quote}
                    </div>
                    <div className="pt-6 max-w-md">
                        - Author saab 
                    </div>
                    <div className="text-light text-gray-600 max-w-md">
                        CEO dukaan
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Quote