import React from 'react'
import { Switch } from "../Components/ui/switch"
import { Moon, Sun } from 'react-feather'
import FuzzyText from '../ReactBit/FuzzyText';

function Navbar() {
    return (
        <div className=' iridescent-glass rounded-4xl py-3 w-fit z-50 mx-auto  flex max-md:flex-col max-md:items-center max-md:gap-3 max-md:w-[90%]'>
            <div className=' uppercase py-4'>
                <FuzzyText
                    baseIntensity={0.1}

                >
                    KANBAN BOARD
                </FuzzyText>

            </div>

            <div className='w-[250px] flex items-center'>
                <input
                    type="text"
                    placeholder='Search Board'
                    className='border-2 w-full pl-3 py-1 outline-none rounded-2xl'
                />
            </div>

            <div className='flex item-center  px-4'>
                <div className=' flex items-center mr-2'>
                    <Sun />
                </div>

                <div className='  flex items-center cursor-pointer'>
                    <Switch />
                </div>
                <div className=' flex items-center mx-2'>
                    <Moon />
                </div>

            </div>

        </div>
    )
}

export default Navbar
