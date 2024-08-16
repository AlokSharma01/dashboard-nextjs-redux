import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import initialData from "../../constant/widgetData.json"
interface Widget {
  id: string;
  label: string;
  type: string |"empty" | "chart";
  isActive: boolean;
}

interface Category {
  id: string;
  category: string;
  widget: Widget[];
}

interface WidgetsState {
  categories: Category[];
}

// my initial state 
const initialState: WidgetsState = {
  //  @ts-ignore
  categories: initialData
}

const widgetsSlice = createSlice({
  name: 'widgets',
  initialState,
  reducers: {
    toggleWidget(state, action: PayloadAction<{ categoryId: string; widgetId: string }>) {
      const { categoryId, widgetId } = action.payload;
     
      const category = state.categories.find(cat => cat.id === categoryId);
      if (category) {
        const widget = category.widget.find(wid => wid.id === widgetId);
        if (widget) {
          widget.isActive = !widget.isActive;
        }
      }
    },
    addWidget(state, action: PayloadAction<{ categoryId: string; widget: Widget }>) {
      const { categoryId, widget } = action.payload;
      const category = state.categories.find(cat => cat.id === categoryId);
      if (category) {
        category.widget.push(widget);
      }
    }
    
  }
});

export const { toggleWidget,addWidget  } = widgetsSlice.actions;
export default widgetsSlice.reducer;
