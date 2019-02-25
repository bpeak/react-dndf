import PropTypes from 'prop-types'
import wrapperDefaultStyle from './styles/wrapperDefaultStyle'
import inputFileStyle from './styles/inputFileStyle'
import contentsContainerStyle from './styles/contentsContainerStyle'
import sampleContentsStyle from './styles/sampleContentsStyle'

const ReactDNDF = (React) => {

    const SampleCover = () => {
        return (
            <div style={sampleContentsStyle}>
                Drag And Drop Files
            </div>
        )
    }

    class DropZone extends React.Component {
        constructor(props){
            super(props)
        }
    
        onInputFileChange = () => {
            this.props.onFileChange(this.refs.inputFile.files)
            this.clearInput()
        }

        clearInput = () => {this.refs.inputFile.value = null}
    
        render(){
            const { 
                className,
                wrapperStyle, 
                accept,
                children,
            } = this.props

            const { onInputFileChange } = this
            return (
                <div
                    className={className}
                    style={ wrapperStyle ? Object.assign(wrapperStyle, { position : "relative"}) : wrapperDefaultStyle }
                >
                    <input
                        ref="inputFile"
                        style={inputFileStyle}
                        type="file"
                        accept={accept || "*"}
                        onChange={onInputFileChange}
                    />
                    <div style={contentsContainerStyle}>
                        {children || <SampleCover/>}
                    </div>
                </div>
            )
        }
    }
    DropZone.propTypes = {
        accpet : PropTypes.string,
        onFileChange : PropTypes.func.isRequired,
    }
    return DropZone
}

export default ReactDNDF