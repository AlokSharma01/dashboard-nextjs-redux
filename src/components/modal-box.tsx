"use client";
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { addWidget } from "@/store/slices/widgetsSlice";
import { RootState } from "@/store";
import { Toaster } from './ui/sonner';
import { toast } from 'sonner';

export function ModalBox({ children }: { children: React.ReactNode }) {
    const categories = useSelector((state: RootState) => state.widgets.categories);
    const dispatch = useDispatch();

    const [categoryId, setCategoryId] = useState(categories[0]?.id || '');
    const [label, setLabel] = useState('');
    const [type, setType] = useState('empty');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const newWidget = {
            id: new Date().getTime().toString(), 
            label,
            type,
            isActive: false, 
        };

        dispatch(addWidget({ categoryId, widget: newWidget }));
        setLabel(''); 
        setType('empty');
        toast.success(`Widget added to the list!`)
    };

    return (
        <Dialog>
            <DialogTrigger asChild>
                {children}
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Add New Widget</DialogTitle>
                    <DialogDescription>
                        Fill out the details to add a new widget to the selected category.
                    </DialogDescription>
                </DialogHeader>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid gap-4">
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="category" className="text-right">
                                Category
                            </Label>
                            <select
                                id="category"
                                value={categoryId}
                                onChange={(e) => setCategoryId(e.target.value)}
                                className="col-span-3 p-2 border rounded"
                            >
                                {categories.map((category) => (
                                    <option key={category.id} value={category.id}>
                                        {category.category}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="label" className="text-right">
                                Widget Name
                            </Label>
                            <Input
                                id="label"
                                value={label}
                                onChange={(e) => setLabel(e.target.value)}
                                className="col-span-3"
                            />
                        </div>

                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="type" className="text-right">
                                Widget Type
                            </Label>
                            <select
                                id="type"
                                value={type}
                                onChange={(e) => setType(e.target.value)}
                                className="col-span-3 p-2 border rounded"
                            >
                                <option value="chart">Chart</option>
                                <option value="empty">Empty</option>
                            </select>
                        </div>
                    </div>
                    <DialogFooter>
                        <Button type="submit">Create</Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    );
}
