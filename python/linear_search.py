def linear_search(val, array):
    indices =[i for i in range(0,len(array))]
    result = []
    
    for i in indices:
        if val == array[i]:
            result.append(i)
    
    if len(result) < 1:
        return None
    else: 
        return result[0]

    
def global_linear_search(val, array):
    indices = [i for i in range(0,len(array))]
    result = []

    for i in indices:
        if val == array[i]:
            result.append(i)
    if len(result) < 1:
        return None
    else:
        return result
