import * as React from 'react';
import { Slider, Rail, Handles, Tracks, Ticks } from 'react-compound-slider';
import { Handle, Track, Tick } from './sliderComponents'; // example render components

const sliderStyle: React.CSSProperties = {
    margin: '5%',
    position: 'relative',
    width: '90%'
};

const railStyle: React.CSSProperties = {
    position: 'absolute',
    width: '100%',
    height: 14,
    borderRadius: 7,
    cursor: 'pointer',
    backgroundColor: 'rgb(155,155,155)'
};

const domain: number[] = [0, 50];

interface Props {
    val: any;
    onChange: any;
}

class SliderFilter extends React.Component<Props> {
    constructor(props: Props) {
        super(props);
        console.log(props);

    }
    public state = {
        values: this.props.val//[1, 50]
    };

    public onChange = (values: number[]) => {
        this.setState({ values });
        this.props.onChange(values);
        
    };

    public render() {
        const {
            state: { values }
        } = this;

        return (
            <div style={{ height: 120, width: '100%' }}>
                <Slider
                    mode={1}
                    step={5}
                    domain={domain}
                    rootStyle={sliderStyle}
                    onChange={this.onChange}
                    values={values}
                >
                    <Rail>
                        {({ getRailProps }) => (
                            <div style={railStyle} {...getRailProps()} />
                        )}
                    </Rail>
                    <Handles>
                        {({ handles, getHandleProps }) => (
                            <div className="slider-handles">
                                {handles.map(handle => (
                                    <Handle
                                        key={handle.id}
                                        handle={handle}
                                        domain={domain}
                                        getHandleProps={getHandleProps}
                                    />
                                ))}
                            </div>
                        )}
                    </Handles>
                    <Tracks left={false} right={false}>
                        {({ tracks, getTrackProps }) => (
                            <div className="slider-tracks">
                                {tracks.map(({ id, source, target }) => (
                                    <Track
                                        key={id}
                                        source={source}
                                        target={target}
                                        getTrackProps={getTrackProps}
                                    />
                                ))}
                            </div>
                        )}
                    </Tracks>
                    <Ticks values={[1, 10, 20, 30, 40, 50]}>
                        {({ ticks }) => (
                            <div className="slider-ticks">
                                {ticks.map(tick => (
                                    <Tick key={tick.id} tick={tick} count={ticks.length} />
                                ))}
                            </div>
                        )}
                    </Ticks>
                </Slider>
            </div>
        );
    }
}
export default SliderFilter;
