import React from 'react';

const Pricing = () => {
    return (
        <div id='pricing' className='mt-16'>
            <h2 className='text-3xl text-center'>QADVISORY <span className='text-[#a00d63]'>PRICING</span></h2>

            <div className='mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-5'>
                {/* card 1  */}
                <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white border border-gray-200">
                    <div className="p-4">
                        <h2 className="text-xl font-semibold text-gray-900 mb-2 text-center">BASIC</h2>
                        <div className="flex justify-center items-center mb-6">
                            <div className="bg-[#a00d63] p-4 rounded-full w-28 h-28 flex flex-col justify-center items-center text-white">
                                <h1 className="text-3xl font-semibold">$28</h1>
                                <p className="text-sm -mt-4">PER MONTH</p>
                            </div>
                        </div>
                        <hr className="border-gray-50" />
                        <p className="text-gray-600 text-center">Free Access</p>
                        <hr className="border-gray-50" />
                        <p className="text-gray-600 text-center">2 Unique Concepts</p>
                        <hr className="border-gray-50" />
                        <p className="text-gray-600 text-center">5 Revisions</p>
                        <hr className="border-gray-50" />
                        <p className="text-gray-600 text-center">Template design</p>
                        <hr className="border-gray-50" />
                        <p className="text-gray-600 text-center">Secure data</p>
                        <hr className="border-gray-50" />
                        <p className="text-gray-600 text-center">24/7 Support</p>
                        <hr className="border-gray-50" />

                    </div>
                </div>

                {/* card 2  */}
                <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white border border-gray-200">
                    <div className="p-4">
                        <h2 className="text-xl font-semibold text-gray-900 mb-2 text-center">STANDARD</h2>
                        <div className="flex justify-center items-center mb-6">
                            <div className="bg-[#a00d63] p-4 rounded-full w-28 h-28 flex flex-col justify-center items-center text-white">
                                <h1 className="text-3xl font-semibold">$48</h1>
                                <p className="text-sm -mt-4">PER MONTH</p>
                            </div>
                        </div>
                        <hr className="border-gray-50" />
                        <p className="text-gray-600 text-center">Free Access</p>
                        <hr className="border-gray-50" />
                        <p className="text-gray-600 text-center">2 Unique Concepts</p>
                        <hr className="border-gray-50" />
                        <p className="text-gray-600 text-center">5 Revisions</p>
                        <hr className="border-gray-50" />
                        <p className="text-gray-600 text-center">Template design</p>
                        <hr className="border-gray-50" />
                        <p className="text-gray-600 text-center">Secure data</p>
                        <hr className="border-gray-50" />
                        <p className="text-gray-600 text-center">24/7 Support</p>
                        <hr className="border-gray-50" />

                    </div>
                </div>

                {/* card 3  */}
                <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white border border-gray-200">
                    <div className="p-4">
                        <h2 className="text-xl font-semibold text-gray-900 mb-2 text-center">PREMIUM</h2>
                        <div className="flex justify-center items-center mb-6">
                            <div className="bg-[#a00d63] p-4 rounded-full w-28 h-28 flex flex-col justify-center items-center text-white">
                                <h1 className="text-3xl font-semibold">$68</h1>
                                <p className="text-sm -mt-4">PER MONTH</p>
                            </div>
                        </div>
                        <hr className="border-gray-50" />
                        <p className="text-gray-600 text-center">Free Access</p>
                        <hr className="border-gray-50" />
                        <p className="text-gray-600 text-center">2 Unique Concepts</p>
                        <hr className="border-gray-50" />
                        <p className="text-gray-600 text-center">5 Revisions</p>
                        <hr className="border-gray-50" />
                        <p className="text-gray-600 text-center">Template design</p>
                        <hr className="border-gray-50" />
                        <p className="text-gray-600 text-center">Secure data</p>
                        <hr className="border-gray-50" />
                        <p className="text-gray-600 text-center">24/7 Support</p>
                        <hr className="border-gray-50" />

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Pricing;