function count_handshake(jumlah){
    if (jumlah == 0){
        return 0
    }else{
return (jumlah - 1) + count_handshake(jumlah-1)
    }
}

console.log(count_handshake(2))