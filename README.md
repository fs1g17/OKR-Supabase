https://www.youtube.com/watch?v=zDWhvARoWl8&ab_channel=VijayR

https://chatgpt.com/c/67cc4767-1bb4-800a-adcd-0662ae1bce25

maybe calculate how wide and how high the chart is 
based on that - scale the box width and height accordingly? 

docker build --build-arg BACKEND_BASE_URL=http://127.0.0.1:8000 \
             --build-arg NEXT_PUBLIC_BACKEND_BASE_URL=http://127.0.0.1:8000 \
             -t gcr.io/okr-tracker-454311/front .

docker run -p 3000:3000   -e NEXT_PUBLIC_BACKEND_BASE_URL=http://127.0.0.1:8000   -e BACKEND_BASE_URL=http://127.0.0.1:8000   gcr.io/okr-tracker-454311/front

docker run -p 3000:3000   -e NEXT_PUBLIC_BACKEND_BASE_URL=http://localhost:8000   -e BACKEND_BASE_URL=http://localhost:8000   gcr.io/okr-tracker-454311/front