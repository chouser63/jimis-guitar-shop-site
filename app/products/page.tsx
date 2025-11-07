"use client";

import { useState } from "react";
import GuitarTile from "@/components/products/guitar-tile";
import GuitarView from "@/components/products/guitar-view";

export type Guitar = {
    make: string;
    model: string;
    colour: string;
    price: number;
    description: string;
};

const guitars: Guitar[] = [
        {
            make: "Alvarez",
            model: "DC-1 (12/String)",
            colour: "Natural",
            price: 699.95,
            description: "A natural Alvarez DC-1 (12/String) guitar known for its excellent tone and build quality."
        },
        {
            make: "Aria",
            model: "STG Series (Lefty)",
            colour: "Grey",
            price: 150.00,
            description: "A grey Aria STG Series (Lefty) guitar known for its excellent tone and build quality."
        },
        {
            make: "Burns",
            model: "Brian May",
            colour: "Trans. Red",
            price: 699.95,
            description: "A trans. red Burns Brian May guitar known for its excellent tone and build quality."
        },
        {
            make: "Carlo Robelli",
            model: "SG Copy",
            colour: "Wine Red",
            price: 299.95,
            description: "A wine red Carlo Robelli SG Copy guitar known for its excellent tone and build quality."
        },
        {
            make: "Carvin",
            model: "Bass",
            colour: "Unknown",
            price: 299.95,
            description: "A unknown Carvin Bass guitar known for its excellent tone and build quality."
        },
        {
            make: "Carvin",
            model: "Bass (6/String)",
            colour: "Vintage Sunburst",
            price: 699.95,
            description: "A vintage sunburst Carvin Bass (6/String) guitar known for its excellent tone and build quality."
        },
        {
            make: "Carvin",
            model: "LB-70 Bass",
            colour: "Blue",
            price: 499.00,
            description: "A blue Carvin LB-70 Bass guitar known for its excellent tone and build quality."
        },
        {
            make: "Cort",
            model: "Bass w/EMG's",
            colour: "Natural",
            price: 199.95,
            description: "A natural Cort Bass w/EMG's guitar known for its excellent tone and build quality."
        },
        {
            make: "Danelectro",
            model: "Hearsay",
            colour: "Redburst",
            price: 199.95,
            description: "A redburst Danelectro Hearsay guitar known for its excellent tone and build quality."
        },
        {
            make: "Danelectro",
            model: "Innuendo",
            colour: "Brown",
            price: 250.00,
            description: "A brown Danelectro Innuendo guitar known for its excellent tone and build quality."
        },
        {
            make: "DeArmond",
            model: "M-65C",
            colour: "Gold",
            price: 250.00,
            description: "A gold DeArmond M-65C guitar known for its excellent tone and build quality."
        },
        {
            make: "DiPinto",
            model: "Galaxie 4LH",
            colour: "Silversparkle",
            price: 299.95,
            description: "A silversparkle DiPinto Galaxie 4LH guitar known for its excellent tone and build quality."
        },
        {
            make: "Dobro",
            model: "Metal Body",
            colour: "Metal",
            price: 1299.95,
            description: "A metal Dobro Metal Body guitar known for its excellent tone and build quality."
        },
        {
            make: "Epiphone",
            model: "Dot",
            colour: "Black",
            price: 299.95,
            description: "A black Epiphone Dot guitar known for its excellent tone and build quality."
        },
        {
            make: "Epiphone",
            model: "ES-335 Dot Reissue",
            colour: "Tobacco Sunburst",
            price: 399.95,
            description: "A tobacco sunburst Epiphone ES-335 Dot Reissue guitar known for its excellent tone and build quality."
        },
        {
            make: "Epiphone",
            model: "Explorer Bass",
            colour: "Black",
            price: 350.00,
            description: "A black Epiphone Explorer Bass guitar known for its excellent tone and build quality."
        },
        {
            make: "Fandel",
            model: "Rick 330 Style Electric",
            colour: "Black",
            price: 299.95,
            description: "A black Fandel Rick 330 Style Electric guitar known for its excellent tone and build quality."
        },
        {
            make: "Fender",
            model: "Jazz Bass Am. Std.",
            colour: "Inca Silver",
            price: 699.95,
            description: "A inca silver Fender Jazz Bass Am. Std. guitar known for its excellent tone and build quality."
        },
        {
            make: "Fender",
            model: "Jazz Bass Deluxe (5/String)",
            colour: "Black",
            price: 799.95,
            description: "A black Fender Jazz Bass Deluxe (5/String) guitar known for its excellent tone and build quality."
        },
        {
            make: "Fender",
            model: "Jazz Bass (Fretless) Mexico",
            colour: "Midnight Purple",
            price: 399.00,
            description: "A midnight purple Fender Jazz Bass (Fretless) Mexico guitar known for its excellent tone and build quality."
        },
        {
            make: "Fender",
            model: "Jazz Bass Squire",
            colour: "Sunburst",
            price: 199.95,
            description: "A sunburst Fender Jazz Bass Squire guitar known for its excellent tone and build quality."
        },
        {
            make: "Fender",
            model: "Jazz Bass (U.S.A)",
            colour: "Natural",
            price: 899.95,
            description: "A natural Fender Jazz Bass (U.S.A) guitar known for its excellent tone and build quality."
        },
        {
            make: "Fender",
            model: "Precision Bass",
            colour: "Sunburst",
            price: 899.95,
            description: "A sunburst Fender Precision Bass guitar known for its excellent tone and build quality."
        },
        {
            make: "Gibson",
            model: "Les Paul Deluxe",
            colour: "Gold Top",
            price: 1799.95,
            description: "A gold top Gibson Les Paul Deluxe guitar known for its excellent tone and build quality."
        },
        {
            make: "Gibson",
            model: "Les Paul Studio",
            colour: "Trans. Red",
            price: 899.95,
            description: "A trans. red Gibson Les Paul Studio guitar known for its excellent tone and build quality."
        },
        {
            make: "Gibson",
            model: "Les Paul Studio",
            colour: "Wine Red",
            price: 899.95,
            description: "A wine red Gibson Les Paul Studio guitar known for its excellent tone and build quality."
        },
        {
            make: "MusicMan",
            model: "Bass (Stingray 5)",
            colour: "Trans. Gold",
            price: 995.00,
            description: "A trans. gold MusicMan Bass (Stingray 5) guitar known for its excellent tone and build quality."
        },
        {
            make: "MusicMan",
            model: "Stingray",
            colour: "Natural",
            price: 995.00,
            description: "A natural MusicMan Stingray guitar known for its excellent tone and build quality."
        },
        {
            make: "Rickenbacker",
            model: "4003 Bass",
            colour: "Fireglo",
            price: 899.95,
            description: "A fireglo Rickenbacker 4003 Bass guitar known for its excellent tone and build quality."
        },
        {
            make: "Rickenbacker",
            model: "4003 Bass",
            colour: "Blue",
            price: 850.00,
            description: "A blue Rickenbacker 4003 Bass guitar known for its excellent tone and build quality."
        },
        {
            make: "Rickenbacker",
            model: "450/12",
            colour: "Fireglo",
            price: 799.95,
            description: "A fireglo Rickenbacker 450/12 guitar known for its excellent tone and build quality."
        },
        {
            make: "James Tyler",
            model: "JTV-59",
            colour: "Tobacco Sunburst",
            price: 1635.00,
            description: "A tobacco sunburst James Tyler JTV-59 guitar known for its excellent tone and build quality."
        }
    ];

export default function Products() {


    const [selectedGuitar, setSelectedGuitar] = useState<Guitar>(guitars[0]);

    return (
        <div className="min-h-screen">
            <div className="px-6 py-12">
                <h1 className="text-4xl text-indigo-600 font-bold tracking-widest text-left mb-10 ml-4">
                    PRODUCTS
                </h1>

                <div className="flex flex-col md:relative">
                    <div className="md:w-[55%] pr-4">
                        <div className="p-4 rounded-2xl shadow-md bg-indigo-50">
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                {guitars.map((guitar, index) => (
                                    <div 
                                        key={index} 
                                        onClick={() => setSelectedGuitar(guitar)} 
                                        className="cursor-pointer transition-transform hover:scale-105"
                                    >
                                        <div className="bg-indigo-100 hover:bg-indigo-200 transition-colors rounded-xl overflow-hidden shadow-sm">
                                            <GuitarTile guitar={guitar} />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="hidden md:block md:fixed md:top-36 md:right-8 md:w-[40%] h-screen pt-12">
                        <div className="bg-indigo-100 text-white rounded-2xl shadow-md p-8 h-[calc(100vh-20rem)] md:h-[calc(100vh-30rem)]">
                            <GuitarView guitar={selectedGuitar} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
