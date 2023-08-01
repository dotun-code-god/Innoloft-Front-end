import React, { Component } from 'react'
import 'ckeditor5-custom-build'
import { CKEditor } from '@ckeditor/ckeditor5-react'

class MyCKEditor extends Component {
    render() {
        return (
            <div>
                <CKEditor
                    editor={classicEditor}
                    data="<p>Hello</p>"
                    onChange={(event, editor) => {
                        const data = editor.getData();
                        console.log({ event, editor, data })
                    }}
                />
            </div>
        )
    }
}

export default MyCKEditor;