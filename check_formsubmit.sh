#!/bin/bash
# Check FormSubmit.co and send test if working

HTTP_CODE=$(curl -s -o /dev/null -w '%{http_code}' --max-time 10 https://formsubmit.co/ 2>/dev/null)

if [ "$HTTP_CODE" = "200" ]; then
    echo "FormSubmit is UP! Sending test form..."
    curl -s -X POST https://formsubmit.co/ajax/vovec853@gmail.com \
        -H 'Content-Type: application/json' \
        -H 'Accept: application/json' \
        -d '{"type":"Тестовая анкета","childName":"Тест Ребенок","childAge":"3","phone":"+79123456789","message":"Это тестовая отправка для проверки FormSubmit"}' 2>/dev/null
    echo "Test sent!"
else
    echo "FormSubmit still down (HTTP: $HTTP_CODE) - $(date)"
fi
