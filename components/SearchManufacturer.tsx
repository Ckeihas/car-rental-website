"use client"
import React, { useState, Fragment } from 'react'
import { SearchManuFacturerProps } from './types/index'
import { Combobox, Transition, ComboboxButton, ComboboxInput, ComboboxOptions, ComboboxOption } from '@headlessui/react'
import Image from 'next/image'
import { manufacturers } from '@/constants/index'

const SearchManufacturer = ({manufacturer, setManufacturer}: SearchManuFacturerProps) => {
    const [query, setQuery] = useState('')

    const filteredManufacturers = query === '' ? manufacturers : 
    manufacturers.filter((item) => (item.toLowerCase().replace(/\s+/g, '')
    .includes(query.toLowerCase().replace(/\s+/g, ''))));

  return (
    <div className='search-manufacturer'>
        <Combobox value={manufacturer} onChange={setManufacturer}>
            <div className='relative w-full'>
                <ComboboxButton className='absolute top-[14px]'>
                    <Image 
                    src='/car-logo.svg'
                    alt='car logo'
                    width={20}
                    height={20}
                    className='ml-4'
                    />
                </ComboboxButton>
                <ComboboxInput 
                className='search-manufacturer__input'
                placeholder='Volkswagen'
                displayValue={((manufacturer: string) => 
                    manufacturer
                )}
                onChange={(e) => setQuery(e.target.value)}
                />
                <Transition 
                as={Fragment}
                >
                    <ComboboxOptions>
                        {filteredManufacturers.map((item) => (
                            <ComboboxOption 
                            key={item}
                            className={({focus}) => `relative search-manufacturer__option ${
                                focus ? "bg-primary-blue text-white" : "text-gray-900"
                              }`}
                            value={item}
                            >
                                {({ selected, focus }) => (
                                    <>
                                        <span className={`block truncate ${selected ? "font-medium" : "font-normal"}`}>
                                        {item}
                                        </span>

                                        {/* Show an active blue background color if the option is selected */}
                                        {selected ? (
                                        <span className={`absolute inset-y-0 left-0 flex items-center pl-3 ${focus ? "text-white": "text-pribg-primary-purple"}`}
                                        ></span>
                                        ) : null}
                                    </>
                                )}
                            </ComboboxOption>
                        ))
                        }
                    </ComboboxOptions>
                </Transition>

            </div>
        </Combobox>
    </div>
  )
}

export default SearchManufacturer