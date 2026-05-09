const BgColor = ({top="0px",left="0px",right="0px",bottom="0px",size = "300px",color = "bg-cyan-500/30",}) => {
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