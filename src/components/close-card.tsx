"use client"
import { toggleWidget } from '@/store/slices/widgetsSlice';
import { X } from 'lucide-react'
import { useDispatch } from 'react-redux';
import { toast } from 'sonner';

type CloseProps ={
    catId:string;
    widgetId:string
}
const CloseCard = ({catId,widgetId}:CloseProps) => {
    const dispatch = useDispatch();
    const handleToggle = (categoryId: string, widgetId: string) => {
      dispatch(toggleWidget({ categoryId, widgetId }));
      toast.success("Widget removed from dashboard!")
  };
    return (
        <span onClick={()=>handleToggle(catId,widgetId)} className="flex items-center cursor-pointer">
            <X />
        </span>

    )
}

export default CloseCard