### Concise Design and Development Guide

This guide provides a framework for designing and developing React-based dashboards. The primary goal is to maintain a consistent look, feel, and user experience across dashboards, regardless of differing data and content.

### 1. Overall Structure

The dashboard utilizes a responsive grid layout, ensuring adaptability across various screen sizes.

-   **Main Container**: `min-h-screen`, `bg-gray-50`, `p-8`
-   **Page Content**: `max-w-7xl`, `mx-auto`, `space-y-8`

```html
<div class="p-8 min-h-screen bg-gray-50">
  <div class="mx-auto space-y-8 max-w-7xl"></div>
</div>
```

### 2. Typography

-   **Font Family**: Use a sans-serif font like Inter, Arial, or Helvetica.
-   **Font Sizes**:
    -   Headers: `text-2xl`, `text-xl`, `text-lg`
    -   Subheaders: `text-md`, `text-sm`
    -   Body Text: `text-sm`, `text-xs`
-   **Font Weights**:
    -   Headers: `font-semibold`
    -   Subheaders: `font-medium`
    -   Body Text: `font-normal`
-   **Colors**:
    -   Primary Text: `text-gray-900`
    -   Secondary Text: `text-gray-600`, `text-gray-500`
    -   Accent: `text-purple-600`, `text-indigo-600`, `text-fuchsia-600`

### 3. Color Palette

A consistent color palette should be employed.

-   **Primary Colors**:
    -   Purple: `#9333EA`
    -   Fuchsia: `#D946EF`
    -   Indigo: `#4F46E5`
    -   Violet: `#8B5CF6`
-   **Secondary Colors**:
    -   Dark Gray: `#1F2937`
    -   Medium Gray: `#4B5563`
    -   Light Gray: `#D1D5DB`
-   **Background Colors**:
    -   Light Gray: `#F9FAFB`
    -   White: `#FFFFFF`
-   **Gradients**:
    -   `from-{color}-50 to-white`

### 4. Grid System

-   **Structure**: Utilizes Tailwind CSS's responsive grid system.
-   **Column Count**: Varies based on screen size (e.g., `grid-cols-1`, `lg:grid-cols-2`, `grid-cols-4`).
-   **Spacing**: Controlled with classes like `gap-6`, `gap-8`.
-   **Example**:

```html
<div class="grid grid-cols-1 gap-8 lg:grid-cols-2">
  <div></div>
  <div></div>
</div>
```

### 5. Component Structure

The dashboard comprises reusable React components.

#### 5.1 Card

-   **Classes**: `p-6`, `bg-white`, `border`, `border-gray-100`, `shadow-sm`, `rounded-lg`
-   **Structure**:

```typescript
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

<Card>
  <CardHeader>
    <CardTitle></CardTitle>
  </CardHeader>
  <CardContent></CardContent>
</Card>
```

#### 5.2 Metric Card (Customizable)

-   **Purpose**: Displays key metrics. Content can be adjusted based on needs.
-   **Example Structure**:

```typescript
<Card className="p-4 bg-gradient-to-br from-indigo-50 to-white border-indigo-100">
  <div className="space-y-1">
    <p className="text-sm text-indigo-600 font-medium">Title</p>
    <p className="text-2xl font-semibold text-indigo-900">Value</p>
    <p className="text-xs text-gray-500">Description</p>
  </div>
</Card>
```

#### 5.3 Insight Card (Customizable)

-   **Purpose**: Highlights important information or findings. Content can be tailored as needed.
-   **Example Structure**:

```typescript
<Card className="p-6">
  <div className="flex items-start space-x-4">
    <div className="p-2 bg-purple-100 rounded-lg">
      {/* Icon */}
    </div>
    <div>
      <h3 className="text-lg font-semibold text-gray-900">Title</h3>
      <p className="mt-1 text-sm text-gray-600">Description</p>
    </div>
  </div>
</Card>
```

#### 5.4 Chart (Customizable)

-   **Library**: `recharts`
-   **Types**: `LineChart`, `BarChart`, `AreaChart`, `ComposedChart` can be used.
-   **Customization**: Customization options for each chart type can be found in the `recharts` documentation.
-   **Style**:
    -   Axis Labels: `text-gray-600`, `text-sm`
    -   Grid Lines: `stroke-gray-200`, `strokeDasharray="3 3"`
-   **Example Structure (Line Chart)**:

```typescript
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

<ResponsiveContainer width="100%" height="100%">
  <LineChart data={data}>
    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E0E0E0" />
    <XAxis dataKey="name" />
    <YAxis />
    <Tooltip />
    <Line type="monotone" dataKey="value" stroke="#8884d8" />
  </LineChart>
</ResponsiveContainer>
```

### 6. Buttons

-   **Style**: `px-3 py-1.5 text-xs font-medium rounded-md`
-   **States**: Different background and text colors for active/inactive states.

### 7. Icons

-   **Library**: `lucide-react`
-   **Usage**: Consistent icon set throughout the dashboard.

### 8. Shadows

-   **Usage**: For depth and emphasis.
-   **Implementation**: `shadow-sm`

### 9. Responsive Design

-   **Grid System**: Tailwind CSS's responsive grid system.
-   **Breakpoints**:
    -   `sm`: 640px
    -   `md`: 768px
    -   `lg`: 1024px
    -   `xl`: 1280px
    -   `2xl`: 1536px
-   **Responsive Modifiers**: `sm:`, `md:`, `lg:`, `xl:`, `2xl:`

### 10. Accessibility

-   **Semantic HTML**: Proper use of HTML elements.
-   **ARIA**: Addition of ARIA attributes where necessary.
-   **Keyboard Navigation**: Ensure all interactive elements are keyboard accessible.