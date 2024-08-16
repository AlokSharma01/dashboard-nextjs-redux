"use client"
import React, { useState } from 'react'
import { Checkbox } from './ui/checkbox'
import { useSelector, useDispatch } from 'react-redux';
import { toggleWidget } from '@/store/slices/widgetsSlice';
import { RootState } from '@/store';
import { cn } from '@/lib/utils';
import { toast } from 'sonner';

const SideDrawerContent = ({activeTab}:{activeTab:string}) => {
    const categories = useSelector((state: RootState) => state.widgets.categories);
    const dispatch = useDispatch();

    const [activeCategory, setActiveCategory] = useState(activeTab); // Default to the first category

    const handleToggle = (categoryId: string, widgetId: string) => {
       
        dispatch(toggleWidget({ categoryId, widgetId }));
        toast.success("Dashboard ui updated!")
    };

    const activeCategoryData = categories.find(cat => cat.category === activeCategory);

    return (
        <section className='px-5'>
            <div className='flex items-center gap-10'>
                {categories.map(category => (
                    <p
                        key={category.id}
                        className={cn(`p-2 text-zinc-400 font-medium border-zinc-400 px-5 border-b-2 cursor-pointer`, {
                            "text-blue-700 font-semibold border-blue-700": activeCategory === category.category
                        })}
                        onClick={() => setActiveCategory(category.category)}

                    >
                        {category.category}
                    </p>
                ))}
            </div>

            <div>
                {
                    activeCategoryData?.widget.map(widget => (
                        <div key={widget.id} className="flex items-center space-x-2 mt-5 border p-3 rounded-lg">
                            {/* <Checkbox id={widget.label} checked={widget.isActive} onChange={(e) => handleToggle(activeCategoryData?.id, widget.id)} /> */}
                            <input
                                type="checkbox"
                                id={`widget-${widget.id}`}
                                checked={widget.isActive}
                                onChange={() => handleToggle(activeCategoryData.id, widget.id)}
                                className="checkbox"
                            />
                            <label
                                htmlFor={`widget-${widget.id}`}
                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                                {widget.label}
                            </label>
                        </div>
                    ))
                }

            </div>
        </section>
    )
}

export default SideDrawerContent