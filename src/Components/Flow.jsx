import React, { useCallback, useState } from 'react';
import ReactFlow, {
    MiniMap,
    Controls,
    Background,
    useNodesState,
    useEdgesState,
    addEdge,
} from 'reactflow';
import DialogBox from './DialogBox';
import nodeImg from '../images/node.svg'
import edgeImg from '../images/edge.svg'

import 'reactflow/dist/style.css';
import './Flow.scss'
import EdgeDialogBox from './EdgeDialogBox';
import CustomEdge from './CustomEdge';

const initialNodes = [
    { id: '1', position: { x: 0, y: 0 }, data: { label: '1' } },
    { id: '2', position: { x: 0, y: 100 }, data: { label: '2' } },
    { id: '3', position: { x: 200, y: 200 }, data: { label: '3' } },
];
const initialEdges = [
    { id: 'e1-3', type: 'custom-edge', label: 'node1', source: '1', target: '3' },
    { id: 'e2-3', type: 'custom-edge', label: 'node2', source: '2', target: '3' },
];

const edgeTypes = {
    'custom-edge': CustomEdge,
};

function Flow() {
    const [visible, setVisible] = useState(false);
    const [edgeVisible, setEdgeVisible] = useState(false);
    const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
    const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

    const onConnect = useCallback(
        (connection) => {
            const edge = { ...connection, type: 'custom-edge' };
            setEdges((eds) => addEdge(edge, eds));
        },
        [setEdges],
    );

    // const onConnect = useCallback(
    //     (params) => setEdges((eds) => addEdge(params, eds)),
    //     [setEdges],
    // );

    // const handleNodeSubmit = (data) => {
    //     console.log('Submitted data: in flow ', data);
    // };
    const handleNodeSubmit = (data) => {
        const newNodeId = (nodes.length + 1).toString();
        const newNode = {
            id: newNodeId,
            position: { x: 0, y: 0 },
            data: {
                label: data.data.label
            }
        };
        setNodes([...nodes, newNode]);

        console.log('Submitted data: in flow ', JSON.stringify(data.data.label));
    };


    return (
        <div>
            <div className="ButtonGroup">
                <div className="ButtonDiv" onClick={() => setVisible(true)}>
                    <img src={nodeImg} alt="" />
                    <p>Add Node</p>
                </div>
                <div className="ButtonDiv" onClick={() => setEdgeVisible(true)}>
                    <img src={edgeImg} alt="" />
                    <p>Add Edge</p>
                </div>
            </div>
            <DialogBox visible={visible} setVisible={setVisible} onSubmit={handleNodeSubmit} />
            <EdgeDialogBox visible={edgeVisible} setVisible={setEdgeVisible} />
            <div style={{ width: '100vw', height: '100vh', padding: '70px 0 0 0' }} className='Flow'>
                <ReactFlow
                    nodes={nodes}
                    edges={edges}
                    onNodesChange={onNodesChange}
                    onEdgesChange={onEdgesChange}
                    onConnect={onConnect}
                    edgeTypes={edgeTypes}
                >
                    <Controls />
                    <MiniMap />
                    <Background variant="dots" gap={12} size={1} />
                </ReactFlow>
            </div>
        </div>
    );
}

export default Flow;