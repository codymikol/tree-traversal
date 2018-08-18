import * as cyto from 'cytoscape'
import {CytoscapeOptions, ElementDefinition} from "cytoscape";

window.onload = () => bootstrap();

function bootstrap() {

    let cytoContainer = document.getElementById('cyto-container');

    let cytoscopeOptions: CytoscapeOptions = {
        container: document.getElementById('cy'),

        boxSelectionEnabled: false,
        autounselectify: true,

        elements: [
            {data: { id: 'root' }},
            {data: { id: 'child1' }},
            {data: { id: 'child2' }},
            {data: { id: 'child3' }},
            {data: { id: 'root to 1', source: 'root', target: 'child1' }},
            {data: { id: 'root to 2', source: 'root', target: 'child2' }},
            {data: { id: 'root to 3', source: 'root', target: 'child3' }}
        ],

        style: [ // the stylesheet for the graph
            {
                selector: 'node',
                style: {
                    'background-color': '#666',
                    'label': 'data(id)'
                }
            },

            {
                selector: 'edge',
                style: {
                    'width': 3,
                    'line-color': '#ccc',
                    'target-arrow-color': '#ccc',
                    'target-arrow-shape': 'triangle'
                }
            }
        ],

        layout: {
            name: 'grid',
            rows: 1
        },

    };

    cyto(cytoscopeOptions)

}