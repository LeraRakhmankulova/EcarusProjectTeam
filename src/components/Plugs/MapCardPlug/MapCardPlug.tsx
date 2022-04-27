import { animated, easings, useSpring } from 'react-spring';
import styles from '../MapCardPlug/MapCardPlug.module.sass'

const MapCardPlug = () => {
    const { background } = useSpring({
        from: {
            background: 'linear-gradient(146deg, #e1e1e3 10%, #f0f0f2 90%, #e1e1e3 100%)'
        },
        to: {
            background: 'linear-gradient(146deg, #f0f1f4 10%, #d9d9d9 55%, #f0f1f4 100%)'
        },
        config: {
            duration: 900,
            easing: easings.easeInOutQuart,
        },
        loop: { reverse: true },
    })
    return (
        <div className={styles.wrapper}>
             <div className={styles.image}>
             <animated.div style={{ background, width: 120, height: 80, borderRadius: 15, }} />
            </div>
            <div className={styles.text}>
                <animated.div className={styles.plug_content} style={{ background, width: 160, height: 18, borderRadius: 5, }} />
                <animated.div className={styles.plug_content} style={{ background, width: 200, height: 15, borderRadius: 8, }} />
                <animated.div className={styles.plug_content} style={{ background, width: 200, height: 15, borderRadius: 8, }} />
                <animated.div className={styles.plug_content} style={{ background, width: 200, height: 15, borderRadius: 8, }} />
            </div>
        </div>
    )
}

export default MapCardPlug;
