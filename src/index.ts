import * as cyto from 'cytoscape'
import {CytoscapeOptions, ElementDefinition} from "cytoscape";

window.onload = () => bootstrap();

function bootstrap() {

    let elementOne: ElementDefinition = <ElementDefinition>{
        position: {x:10,y:10}
    };

    let elementTwo: ElementDefinition = <ElementDefinition>{
        position: {x:20,y:10}
    };

    let cytoContainer = document.getElementById('cyto-container');

    let cytoscopeOptions: CytoscapeOptions = {
        container: document.getElementById('cy'),

        boxSelectionEnabled: false,
        autounselectify: true,

        elements: [ // list of graph elements to start with
            { // node a
                data: { id: 'a' }
            },
            { // node b
                data: { id: 'b' }
            },
            { // edge ab
                data: { id: 'ab', source: 'a', target: 'b' }
            }
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