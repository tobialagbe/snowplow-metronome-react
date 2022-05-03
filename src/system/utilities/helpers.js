export const getBpmArray = (data)=>{
    const uniqueSet = new Set(data.map(b=>b[b.length - 1]));
    return Array.from(uniqueSet).sort((a,b)=> a-b);
}

export const getActiveSongs = (bpm, data)=>{
    return data.filter(d => d[d.length - 1] === bpm).map(d => d.slice(0, d.length - 1));
}

export const bpmToSeconds = (bpm)=> {
    return 60/bpm;
}