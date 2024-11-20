interface quoteType {
    quote: string,
    name : string
}

const Quote = ({quote, name} : quoteType) => {
  return (
    <>
        <div className="bg-gray-300 h-screen flex justify-center flex-col ">
            <div className="flex justify-center">
                <div className="max-w-md ">
                    <div className="text-3xl font-bold items-center ">
                    {quote}
                    </div>
                    <div className="pt-6 max-w-md">
                        - {name} 
                    </div>
                    <div className="text-light text-gray-600 max-w-md">
                        
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Quote