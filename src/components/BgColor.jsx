const BgColor = ({top,left,right,bottom,size = "400px",color = "bg-cyan-500/30",}) => {
    return (
        <div className={` absolute rounded-full ${color} blur-[120px] `}
            style={{
                width: size,
                height: size,
                top,
                left,
                right,
                bottom,
            }}
        />
    );
};

export default BgColor;