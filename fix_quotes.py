"""Fix nested ASCII double quotes inside JS string values.
Replaces problematic inner " with Chinese quotation marks 『』."""
import re

FILE = r"C:\Users\41825\WorkBuddy\2026-08-09-20-36-51\assets\data.js"

with open(FILE, "r", encoding="utf-8") as f:
    content = f.read()

# Strategy: find patterns where ASCII " appears inside a string value
# We need to replace inner quotes that are clearly within Chinese text context
# Pattern: a Chinese character followed by " followed by Chinese text followed by "
# Replace: Chinese char + 「 + Chinese text + 」

# Replace patterns like: 转"投资于人" -> 转『投资于人』
# Also: 新政"沪八条" -> 新政『沪八条』
# Also: "以旧换新" -> 『以旧换新』
# Also: APEC"中国年" -> APEC『中国年』
# Also: 一箭破韩" -> etc.

# More general: any " that appears between non-ASCII characters should be a Chinese quote
# We'll use a regex to find " preceded by a CJK char and followed by CJK chars, or vice versa

def fix_quotes(text):
    # Replace " that is between CJK characters with Chinese quotation marks
    # Pattern: (CJK char)"(CJK chars)"(CJK char or punctuation)
    # Use 『 and 』 as replacement
    
    # First pass: opening quotes (CJK char before ")
    text = re.sub(r'([\u4e00-\u9fff\u3000-\u303f])"([\u4e00-\u9fff])', r'\1「\2', text)
    
    # Second pass: closing quotes (CJK char before " and after is CJK or punctuation or end of word)
    text = re.sub(r'([\u4e00-\u9fff])"([,\u4e00-\u9fff\u3000-\u303f：；，。、])', r'\1」\2', text)
    
    # Also handle cases like: APEC"中国年" -> APEC「中国年」
    # Non-CJK char before " but CJK after
    text = re.sub(r'([A-Za-z])"([\u4e00-\u9fff])', r'\1「\2', text)
    text = re.sub(r'([\u4e00-\u9fff])"([A-Za-z])', r'\1」\2', text)
    
    # Handle closing quote followed by ：or ，or ）
    text = re.sub(r'([\u4e00-\u9fff])"(：|，|。|、|）| )', r'\1」\2', text)
    
    return text

fixed = fix_quotes(content)

with open(FILE, "w", encoding="utf-8") as f:
    f.write(fixed)

print("Fixed nested quotes in data.js")
