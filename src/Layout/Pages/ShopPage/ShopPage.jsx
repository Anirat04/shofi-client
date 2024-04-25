import ProductCard from "../../Components/Shared/ProductCard/ProductCard";

const ShopPage = () => {
    return (
        <div>
            <div>
                <div><p className="text-[44px] font-medium">Shop Grid</p></div>
                <div className="text-sm breadcrumbs">
                    <ul>
                        <li><a>Home</a></li>
                        <li><a>Shop Grid</a></li>
                    </ul>
                </div>
            </div>

            <div>
                <div className="max-w-[330px]">
                    {/* Price Range */}
                    <div>
                        <input type="range" min={0} max="100" value="40" className="range range-success" />
                        <div className="flex justify-between items-center">
                            <span className="text-[#55585b] text-[14px]">$0 - $79</span>
                            <button className="bg-[#f5f5f5] text-[14px] px-5 py-1">Filter</button>
                        </div>
                    </div>
                    {/* Product status */}
                    <div>
                        <div className="mb-8">
                            <p className="font-medium text-[18px]">Product Status</p>
                            <div className="divider m-0 h-0"></div>
                        </div>
                        <div className="form-control">
                            <label className="cursor-pointer flex items-center gap-3">
                                <input type="checkbox" className="checkbox h-[18px] w-[18px] rounded-none checkbox-accent" />
                                <span className="text-[16px] text-[#55585b]">On sale</span>
                            </label>
                        </div>
                        <div className="form-control">
                            <label className="cursor-pointer flex items-center gap-3">
                                <input type="checkbox" className="checkbox h-[18px] w-[18px] rounded-none checkbox-accent" />
                                <span className="text-[16px] text-[#55585b]">In Stock</span>
                            </label>
                        </div>
                    </div>
                    {/* Top Rated */}
                    <div>
                        <div className="mb-7">
                            <p className="font-medium text-[18px]">Top Rated Products</p>
                            <div className="divider m-0 h-0"></div>
                        </div>
                        <div className="flex flex-col gap-5">
                            <div className="flex gap-4">
                                <div>
                                    <img className="h-[70px] w-[70px]" src="https://shofi-grocery.vercel.app/images/product/product-3.jpg" alt="" />
                                </div>
                                <div>
                                    <div className="flex items-center gap-2">
                                        <div>
                                            <div className="rating rating-xs">
                                                <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                                                <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" checked />
                                                <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                                                <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                                                <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                                            </div>
                                        </div>
                                        <span className="text-xs text-[#55585b]">(5)</span>
                                    </div>
                                    <h2 className="text-[16px] font-medium">Marshmallow Candy White</h2>
                                    <p className="text-[14px] text-[#55585b]">$55.00</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div>
                                    <img className="h-[70px] w-[70px]" src="https://shofi-grocery.vercel.app/images/product/product-3.jpg" alt="" />
                                </div>
                                <div>
                                    <div className="flex items-center gap-2">
                                        <div>
                                            <div className="rating rating-xs">
                                                <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                                                <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" checked />
                                                <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                                                <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                                                <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                                            </div>
                                        </div>
                                        <span className="text-xs text-[#55585b]">(5)</span>
                                    </div>
                                    <h2 className="text-[16px] font-medium">Marshmallow Candy White</h2>
                                    <p className="text-[14px] text-[#55585b]">$55.00</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div>
                                    <img className="h-[70px] w-[70px]" src="https://shofi-grocery.vercel.app/images/product/product-3.jpg" alt="" />
                                </div>
                                <div>
                                    <div className="flex items-center gap-2">
                                        <div>
                                            <div className="rating rating-xs">
                                                <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                                                <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" checked />
                                                <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                                                <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                                                <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                                            </div>
                                        </div>
                                        <span className="text-xs text-[#55585b]">(5)</span>
                                    </div>
                                    <h2 className="text-[16px] font-medium">Marshmallow Candy White</h2>
                                    <p className="text-[14px] text-[#55585b]">$55.00</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <ProductCard></ProductCard>
                </div>
            </div>
        </div>
    );
};

export default ShopPage;