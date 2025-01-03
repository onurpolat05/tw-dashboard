import React from 'react';
import { scaleLinear } from '@visx/scale';
import { Group } from '@visx/group';
import { AxisLeft, AxisBottom } from '@visx/axis';
import { useTooltip, TooltipWithBounds, defaultStyles } from '@visx/tooltip';

interface IRRSensitivityProps {
  data: Array<{ x: number; y: number; value: number }>;
  title: string;
  maxValue: number;
}

const IRRSensitivityHeatmap: React.FC<IRRSensitivityProps> = ({ data, title, maxValue }) => {
  // Dimensions
  const width = 400;
  const height = 300;
  const margin = { top: 40, right: 30, bottom: 50, left: 60 };

  // Tooltip setup
  const {
    tooltipData,
    tooltipLeft,
    tooltipTop,
    tooltipOpen,
    showTooltip,
    hideTooltip,
  } = useTooltip();

  // Scales
  const xScale = scaleLinear<number>({
    domain: [-30, 30],
    range: [margin.left, width - margin.right],
  });

  const yScale = scaleLinear<number>({
    domain: [-30, 30],
    range: [height - margin.bottom, margin.top],
  });

  const colorScale = scaleLinear<string>({
    domain: [0, maxValue],
    range: ['#F3E8FF', '#9333EA'], // Purple gradient from Design.md
  });

  const binWidth = (width - margin.left - margin.right) / 7;
  const binHeight = (height - margin.top - margin.bottom) / 7;

  // Generate grid cells
  const cells = [];
  for (let row = 0; row < 7; row++) {
    for (let col = 0; col < 7; col++) {
      const x = -30 + col * 10;
      const y = 30 - row * 10;
      const value = data.find(d => d.x === x && d.y === y);
      
      if (value) {
        cells.push({
          x: margin.left + col * binWidth,
          y: margin.top + row * binHeight,
          width: binWidth - 1,
          height: binHeight - 1,
          value: value.value,
          dataX: x,
          dataY: y,
        });
      }
    }
  }

  return (
    <div className="w-full">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
      </div>
      <div style={{ position: 'relative' }}>
        <svg width={width} height={height}>
          <Group>
            {cells.map((cell, i) => (
              <rect
                key={i}
                x={cell.x}
                y={cell.y}
                width={cell.width}
                height={cell.height}
                fill={colorScale(cell.value)}
                onMouseLeave={() => hideTooltip()}
                onMouseMove={(event) => {
                  const svgElement = event.currentTarget.ownerSVGElement;
                  if (!svgElement) return;
                  
                  const svgRect = svgElement.getBoundingClientRect();
                  const mouseX = event.clientX - svgRect.left;
                  const mouseY = event.clientY - svgRect.top;
                  
                  showTooltip({
                    tooltipData: {
                      value: cell.value,
                      x: cell.dataX,
                      y: cell.dataY,
                    },
                    tooltipLeft: mouseX,
                    tooltipTop: mouseY - 10, // Offset slightly above cursor
                  });
                }}
              />
            ))}
            <AxisBottom
              scale={xScale}
              top={height - margin.bottom}
              label="Revenue Change (%)"
              labelOffset={15}
              stroke="#4B5563"
              tickStroke="#4B5563"
              tickLabelProps={() => ({
                fill: '#4B5563',
                fontSize: 12,
                textAnchor: 'middle',
              })}
            />
            <AxisLeft
              scale={yScale}
              left={margin.left}
              label="Cost Change (%)"
              labelOffset={25}
              stroke="#4B5563"
              tickStroke="#4B5563"
              tickLabelProps={() => ({
                fill: '#4B5563',
                fontSize: 12,
                textAnchor: 'end',
              })}
            />
          </Group>
        </svg>
        {tooltipOpen && tooltipData && (
          <TooltipWithBounds
            key={Math.random()}
            top={tooltipTop}
            left={tooltipLeft}
            style={{
              ...defaultStyles,
              backgroundColor: 'white',
              color: '#1F2937',
              border: '1px solid #E5E7EB',
              borderRadius: '0.375rem',
              padding: '0.75rem',
              boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
              transform: 'translate(-50%, -100%)', // Center horizontally and position above cursor
            }}
          >
            <div className="space-y-1">
              <p className="text-sm font-medium">
                IRR: {(tooltipData as any).value?.toFixed(1)}%
              </p>
              <p className="text-xs text-gray-600">
                Revenue Change: {(tooltipData as any).x}%
              </p>
              <p className="text-xs text-gray-600">
                Cost Change: {(tooltipData as any).y}%
              </p>
            </div>
          </TooltipWithBounds>
        )}
      </div>
    </div>
  );
};

export default IRRSensitivityHeatmap; 