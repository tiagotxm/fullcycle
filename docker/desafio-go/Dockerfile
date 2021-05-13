FROM golang:alpine3.13 as build

WORKDIR /app

COPY ./hello.go .

RUN go mod init hello

#compile go application
RUN go build -ldflags '-w -s' -a -installsuffix cgo -o ./hello

FROM scratch

COPY --from=build /app/hello .

CMD [ "./hello" ]