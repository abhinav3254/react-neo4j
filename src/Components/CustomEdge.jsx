import React from 'react'
import {
    BaseEdge,
    EdgeLabelRenderer,
    getStraightPath,
    useReactFlow,
} from 'reactflow';

function CustomEdge({ id, sourceX, sourceY, targetX, targetY, label }) {
    // const { setEdges } = useReactFlow();
    const [edgePath, labelX, labelY] = getStraightPath({
        sourceX,
        sourceY,
        targetX,
        targetY,
    });
    return (
        <>
            <BaseEdge id={id} path={edgePath} />
            <EdgeLabelRenderer>
                {label && (
                    <p
                        style={{
                            position: 'absolute',
                            transform: `translate(-50%, -50%) translate(${labelX}px,${labelY}px)`,
                            pointerEvents: 'all',
                            fontSize: '10px',
                            fontStyle: 'italic',
                            color: 'gray'
                        }}
                        className="nodrag nopan"
                    >
                        {label}
                    </p>
                )}
                {!label && (
                    <button
                        style={{
                            position: 'absolute',
                            transform: `translate(-50%, -50%) translate(${labelX}px,${labelY}px)`,
                            pointerEvents: 'all',
                            fontSize: '10px'
                        }}
                        className="nodrag nopan"
                        onClick={() => console.log('Button clicked')}
                    >
                        Add Label
                    </button>
                )}
            </EdgeLabelRenderer>
        </>
    )
}

export default CustomEdge