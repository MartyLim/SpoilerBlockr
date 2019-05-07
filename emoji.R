library(rvest)
library(tidyverse)

page <- read_html("https://unicode.org/emoji/charts/full-emoji-list.html")

keywords <- page %>%
  html_nodes(".name") %>%
  html_text()

raw_codes <- page %>%
  html_nodes(".code a") %>%
  html_text()

emojis <- tibble(
  keyword = keywords,
  raw_code = raw_codes
)

write_csv(emojis, path = "data/emojis.csv")
