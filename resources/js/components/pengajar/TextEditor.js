import React from 'react'

import { Editor } from 'slate-react'
import { Value } from 'slate'

//initial value
const initialValue = Value.fromJSON({
    document: {
        nodes: [
            {
                object: 'block',
                type: 'paragraph',
                nodes: [
                    {
                        object: 'text',
                        text: 'A line of text in a paragraph.',
                    },
                ],
            },
        ],
    },
})

class TextEditor extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            value: initialValue
        }
    }

    onChange = ({ value }) => {
        this.setState({ value })
    }

    onKeyDown = (event, editor, next) => {
        // Return with no changes if it's not the "`" key with ctrl pressed.
        if (event.key != '`' || !event.ctrlKey) return next()

        // Prevent the "`" from being inserted by default.
        event.preventDefault()
        const isCode = editor.value.blocks.some(block => block.type == 'code')
        // Otherwise, set the currently selected blocks type to "code".
        editor.setBlocks(isCode ? 'paragraph' : 'code')
    }

    render() {
        return (
            <Editor
                value={this.state.value}
                onChange={this.onChange}
                onKeyDown={this.onKeyDown}
                renderBlock={this.renderBlock}
            />
        )
    }

    renderBlock = (props, editor, next) => {
        switch (props.node.type) {
            case 'code':
                return <CodeNode {...props} />
            default:
                return next()
        }
    }
}

function CodeNode(props) {
    return (
        <pre {...props.attributes}>
            <code>{props.children}</code>
        </pre>
    )
}

export default TextEditor
