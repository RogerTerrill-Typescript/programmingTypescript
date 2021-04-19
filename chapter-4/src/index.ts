type Reserve = {
  (from: Date, to: Date, destination: string) : Reservation
  (from: Date, destination: string) : Reservation
  (destination: string) : Reservation
}

let reserve: Reserve = (
  fromOrDestination: Date | string,
  toOrDestination?: Date | string,
  destination?: string
) => {
  if (typeof fromOrDestination === 'string') {
    
  }
}