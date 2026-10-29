window.WORKBENCH_DATA = {
  "updated": "2026-10-29",
  "greeting": "观澜AI",
  "slogan": "AI 知识工作台 · 收集、分类、追踪",
  "categories": [
    "前沿动态",
    "论文研究",
    "模型与产品",
    "工具与开源",
    "教程与案例",
    "公司与人物",
    "数据与评测",
    "AI学习"
  ],
  "statuses": [
    "收件箱",
    "待读",
    "处理中",
    "已归档",
    "项目专题",
    "值得追踪"
  ],
  "tagDims": {
    "模态": [
      "文本",
      "图像",
      "视频",
      "音频",
      "多模态"
    ],
    "任务": [
      "生成",
      "理解",
      "Agent",
      "RAG",
      "推理",
      "微调"
    ],
    "技术": [
      "Transformer",
      "Diffusion",
      "RLHF",
      "MoE"
    ],
    "行业": [
      "金融",
      "医疗",
      "教育",
      "法律"
    ],
    "来源": [
      "arXiv",
      "GitHub",
      "X",
      "公众号",
      "官网"
    ],
    "优先级": [
      "必读",
      "参考",
      "灵感",
      "待验证"
    ]
  },
  "items": [
    {
      "cat": "前沿动态",
      "sub": "技术突破",
      "status": "值得追踪",
      "title": "Google Gemini 4 Argon 具身推理登顶 ERQA 87%，看视频学动作成真",
      "summary": "Google 的 Gemini 4 Argon for Robotics 在具身推理基准 ERQA 拿下 87% 最高分，并通过 Video-to-Sim-to-Real 管线让 Apollo 人形机器人看人类丢沙包视频即生成仿真代码，真实测试连续 7 投全中。",
      "detail": "这标志多模态模型从『看懂』走向『照做』：模型把人类演示视频转成可执行的仿真与真实控制代码，显著降低机器人训练对遥操作数据的依赖。Runway 同期开源世界动作模型 Praxis-1，用互联网视频替代机器人遥操作数据，具身智能的数据瓶颈正在被绕开。",
      "source": "Google DeepMind / Runway",
      "url": "https://blog.google/innovation-and-ai/models-and-research/gemini-models/introducing-gemini-4-argon/",
      "date": "2026-10-29",
      "tags": {
        "模态": ["视频", "多模态"],
        "任务": ["理解", "Agent"],
        "来源": ["官网"],
        "优先级": ["必读"]
      }
    },
    {
      "cat": "前沿动态",
      "sub": "模型发布",
      "status": "值得追踪",
      "title": "OpenAI 发布 GPT-6.1 Sol：以 1/5 价格逼近旗舰 Astra",
      "summary": "OpenAI 推出 GPT-6.1 Sol，标准 API 定价 $2/$10（缓存输入 $0.10），在 DeepSWE v1.1 上以约 1/5 成本追平 GPT-6 Astra，事实错误率从 11.4% 降至 7.7%。",
      "detail": "GPT-6.1 Sol 把企业级长程 Agent 的算力成本大幅拉低：在 Terminal-Bench Science 0.1 单次任务成本仅 $5.47，比 Astra 的 $23.80 降超 75%。这与此前 GPT-6.1 Astra 因安全顾虑被无限期推迟形成对比——OpenAI 选择在安全与成本之间先推『够用且便宜』的版本。",
      "source": "OpenAI",
      "url": "https://openai.com/index/introducing-gpt-6-1-sol/",
      "date": "2026-10-29",
      "tags": {
        "模态": ["文本"],
        "任务": ["推理", "Agent"],
        "来源": ["官网"],
        "优先级": ["必读"]
      }
    },
    {
      "cat": "前沿动态",
      "sub": "模型发布",
      "status": "收件箱",
      "title": "Meta 发布 Muse Wonder：首个引入『主动记忆』的系列模型",
      "summary": "Meta 10/12 推出 Muse Wonder 系列，引入主动记忆(Active Memory)与主动专注(Active Focus)两大机制，支持百万 token 上下文；Full 版 DeepSWE 1.1 达 79.0%。",
      "detail": "Muse Wonder 把记忆做进模型架构而非外部插件，让模型在长程任务中主动维护与调用关键信息。标准版已上线 API（$4/$20），依托吉瓦级 Prometheus 数据中心训练，是 Meta 在 Agent 赛道对标 Claude/GPT 的关键落子。",
      "source": "Meta",
      "url": "https://research.meta.ai/blog/muse-wonder",
      "date": "2026-10-29",
      "tags": {
        "模态": ["文本"],
        "任务": ["Agent", "推理"],
        "来源": ["官网"],
        "优先级": ["参考"]
      }
    },
    {
      "cat": "前沿动态",
      "sub": "模型发布",
      "status": "收件箱",
      "title": "Anthropic 推 Claude Haiku 5.5：成本降 75%、电脑操控暴涨",
      "summary": "Anthropic 10/7 发布迄今最快的小模型 Haiku 5.5，成本比 Haiku 4.5 降约 75%（$0.10/$0.50，10 万 token 内）；OSWorld 2.1 离线电脑操控从 15.7% 跃升至 72.4%。",
      "detail": "Haiku 5.5 定位高频并发与子智能体(Subagent)协同场景，是『主模型规划 + 小模型执行』架构里执行侧的首选。它把昂贵主模型的负载拆出来，让全天候后台 Agent 工作流在成本上变得可行。",
      "source": "Anthropic",
      "url": "https://www.anthropic.com/claude-haiku-5-5",
      "date": "2026-10-29",
      "tags": {
        "模态": ["文本"],
        "任务": ["Agent"],
        "来源": ["官网"],
        "优先级": ["参考"]
      }
    },
    {
      "cat": "前沿动态",
      "sub": "模型发布",
      "status": "值得追踪",
      "title": "DeepSeek 开源 V4.1-Flash-1017：自反馈强化学习实现『许愿式编程』",
      "summary": "DeepSeek 10/17 开源 V4.1-Flash-1017 权重（Hugging Face / ModelScope），通过带自我反馈的强化学习，可从零构建故宫 3D 建模、网页赛车游戏与《传送门 2》Godot 复刻，Vals 综合榜开源第一梯队。",
      "detail": "同日 DeepSeek 开放自研 Search & Fetch API（$0.75/千次调用，10/31 前主流框架内免费），补齐开源模型『能生成更要能联网取数』的能力。彭博报道中美顶尖模型差距已从年初 15% 收窄至 3%，DeepSeek 是拉近距离的关键力量。",
      "source": "DeepSeek",
      "url": "https://api-docs.deepseek.com/news/news261017/",
      "date": "2026-10-29",
      "tags": {
        "模态": ["文本", "多模态"],
        "任务": ["生成", "Agent"],
        "来源": ["官网"],
        "优先级": ["必读"]
      }
    },
    {
      "cat": "前沿动态",
      "sub": "融资并购",
      "status": "收件箱",
      "title": "ElevenLabs 员工要约估值 220 亿美元；OpenAI 寻求超 300 亿美元新融资",
      "summary": "ElevenLabs 本月完成 3 亿美元员工要约，估值约 220 亿美元（较 2 月翻倍），ElevenAgents 已占总收入 55%；同期 OpenAI 据报寻求超 300 亿美元新融资，投前估值 1.4 万亿美元。",
      "detail": "AI 语音从工具走向平台：ElevenLabs 的收入结构显示 Agent 化语音已成主引擎。而 Anthropic 招股书披露 2025 年约 46 亿美元收入、未来算力承诺约 5180 亿美元，资本与算力的军备竞赛仍在加速。",
      "source": "AI Startup Edge / Reuters",
      "url": "https://aistartupedge.com/latest-ai-news-october-2026/",
      "date": "2026-10-29",
      "tags": {
        "模态": ["音频", "文本"],
        "任务": ["生成"],
        "来源": ["官网", "X"],
        "优先级": ["参考"]
      }
    },
    {
      "cat": "前沿动态",
      "sub": "模型发布",
      "status": "收件箱",
      "title": "Mistral 发布 Mistral Large 4：万亿参数、160+ 语言的开源旗舰",
      "summary": "法国 Mistral AI 10/6 发布 Mistral Large 4 预览，月底开放权重：万亿总参数、490 亿激活参数、原生多模态，覆盖 160+ 自然语言，主打开源可控与多语种企业场景。",
      "detail": "Mistral 同时宣布 30 亿欧元 D 轮（投后超 210 亿欧元）并与 NVIDIA 合作开发 AI-native 工程工作流，欧洲开源力量在模型与资本两端同步崛起，与 DeepSeek、Qwen 共同构成开源第一梯队。",
      "source": "Mistral / OriginBrief",
      "url": "https://www.originbrief.app/en/reports/ai-industry-overview/2026-10-26/weekly",
      "date": "2026-10-29",
      "tags": {
        "模态": ["多模态", "文本"],
        "任务": ["生成", "推理"],
        "来源": ["官网"],
        "优先级": ["参考"]
      }
    },
    {
      "cat": "论文研究",
      "sub": "多模态/RAG",
      "status": "必读",
      "title": "KnowForge：按岗位拆分的多智能体多模态文档问答框架",
      "summary": "KnowForge 把检索与阅读拆给不同『岗位』的智能体：Locator 只搜、Deep Reader 只读图文表、Judge 强制补第二跳，自托管 Qwen3.6-35B 在 M3DocVQA 上 F1 47.5，较 M3DocRAG +11.0。",
      "detail": "关键洞见是『合并两 agent 反而掉点』：让一个模型同时持两种工具并多轮搜索，会因不停搜而不读。按岗位隔离 + 轮次预算（4 轮 Locator 后拐点）的设计，对自建多模态 RAG 管线是直接可复用的工程范式。",
      "source": "arXiv",
      "url": "https://arxiv.org/abs/2610.13128",
      "date": "2026-10-29",
      "tags": {
        "模态": ["多模态"],
        "任务": ["RAG", "Agent"],
        "来源": ["arXiv"],
        "优先级": ["必读"]
      }
    },
    {
      "cat": "论文研究",
      "sub": "多模态/Agent",
      "status": "收件箱",
      "title": "可追溯多模态情绪推理：用证据校验定位出错环节",
      "summary": "NeurIPS 2026 工作坊论文提出 Agent 式多模态情绪推理框架，感知 agent 发带引用的观察、集成 agent 生成标签、MLLM 批评者最多退修一次；出错时按责任组件分组做确定性证据校验。",
      "detail": "它解决冻结模型搭建 Agent 流水线时『错了不知谁背锅』的痛点：把失败归因到具体 agent/阶段，再生成针对性 prompt 补丁（不更新权重）。在 MER2025 上 2B–38B 四款 MLLM 均超静态基线。",
      "source": "arXiv",
      "url": "https://arxiv.org/abs/2610.31685",
      "date": "2026-10-29",
      "tags": {
        "模态": ["多模态", "音频"],
        "任务": ["Agent", "理解"],
        "来源": ["arXiv"],
        "优先级": ["参考"]
      }
    },
    {
      "cat": "论文研究",
      "sub": "RAG/Agent",
      "status": "收件箱",
      "title": "FRAMe：RAG 记忆 + 多模态教练 Agent 的端到端航班规划",
      "summary": "ICML 2026 LM4Plan 论文 FRAMe 把规划 LLM、RAG 记忆与多模态教练 Agent 融合，生成符合偏好且避开禁飞区的合法航线，并用三阶段校验保安全。",
      "detail": "它把『自然语言需求 → 合法飞行路线』做成可解释、可偏好对齐的端到端系统，并配无标注器的偏好对齐评估。局限在仍是基准场景而非真实空域全量测试——但展示了 RAG 记忆 + 教练式 Agent 在强约束决策中的范式。",
      "source": "arXiv",
      "url": "https://arxiv.org/abs/2607.06964",
      "date": "2026-10-29",
      "tags": {
        "模态": ["多模态", "文本"],
        "任务": ["RAG", "Agent"],
        "来源": ["arXiv"],
        "优先级": ["灵感"]
      }
    },
    {
      "cat": "论文研究",
      "sub": "记忆/Agent",
      "status": "收件箱",
      "title": "CASK：给长期 LLM 记忆加『话语归属』提交边界",
      "summary": "NeurIPS 2026 论文指出持久记忆会把推理中的『假设/他人观点』误当事实固化；提出 CASK 提交规则，保留模型内部的归属信号，让共享世界事实进长期记忆、暂定内容仅留在其原范围内。",
      "detail": "这是个反直觉但关键的设计：语言模型其实自带可因果追溯的『归属权』信号，传统记忆接口却把它丢弃了。CASK 用稳定关系键而非内部坐标来保留它，在长对话冲突与工具 agent 轨迹中防止暂定内容污染后续回答。",
      "source": "arXiv",
      "url": "https://arxiv.org/abs/2610.09008",
      "date": "2026-10-29",
      "tags": {
        "模态": ["文本"],
        "任务": ["Agent"],
        "来源": ["arXiv"],
        "优先级": ["参考"]
      }
    },
    {
      "cat": "论文研究",
      "sub": "Agent/SLM",
      "status": "收件箱",
      "title": "按调用点评估小模型：Agent 不必每步都上旗舰",
      "summary": "NeurIPS 2026 论文在已部署的家庭自动化框架上测 9 个 0.8B–旗舰模型，发现各调用点能力排序不一致、大模型并非处处更优；把每点路由到最佳本地模型可达 91.8%（旗舰 95.4%）且零单调用成本。",
      "detail": "论文还暴露安全风险：小模型在『执行』点用退化方式处理准确率/拒答权衡（某模型对不属于本站的设备 87.2% 仍执行）。结论对 Agent 成本与安全的工程实践都很实在——按调用站点而非整体选模型。",
      "source": "arXiv",
      "url": "https://arxiv.org/abs/2610.09021",
      "date": "2026-10-29",
      "tags": {
        "模态": ["文本"],
        "任务": ["Agent"],
        "来源": ["arXiv"],
        "优先级": ["参考"]
      }
    },
    {
      "cat": "论文研究",
      "sub": "安全/护栏",
      "status": "收件箱",
      "title": "AdaGuard：会『按需思考』的 LLM-as-a-Judge 护栏",
      "summary": "AdaGuard 用 SFT+GRPO 训练自适应护栏，动态推断输入-策略对复杂度，在高速黑盒与可解释推理审核间切换；4B 小模型可在极低延迟下比肩数倍大的护栏/前沿模型。",
      "detail": "核心创新是『推理是预算而非常量』：仅当难度高才触发 CoT，auto-reasoning 模式以远低延迟恢复常开推理的准确率，并在合成留出策略测试 F1 达 88.2。对企业把安全护栏从固定规则升级为可运行时通用、可审计的方案很有参考价值。",
      "source": "arXiv",
      "url": "https://arxiv.org/abs/2610.08923",
      "date": "2026-10-29",
      "tags": {
        "模态": ["文本"],
        "任务": ["理解"],
        "来源": ["arXiv"],
        "优先级": ["待验证"]
      }
    },
    {
      "cat": "模型与产品",
      "sub": "榜单",
      "status": "值得追踪",
      "title": "Claude Opus 5.5 以 58 分登顶 Artificial Analysis 智能指数",
      "summary": "Artificial Analysis 10 月快照：Claude Opus 5.5 智能指数 58 居首，Sonnet 5.5 56、Fable 5.1 53；GPT-6 Astra 与 Gemini 4 Argon 同 53 并列第五。",
      "detail": "Opus 5.5 定价 $4/$20，较 Opus 5 降 40%，在 agentic coding 与知识工作领先；方法论为 agents30%/coding20%/科学20%/general30%。多个厂商自报分不可直接横比，建议在自有样本实测。",
      "source": "Santage / Artificial Analysis",
      "url": "https://santageai.com/learn/research/llm-comparison",
      "date": "2026-10-29",
      "tags": {
        "模态": ["文本"],
        "任务": ["推理", "Agent"],
        "来源": ["官网"],
        "优先级": ["必读"]
      }
    },
    {
      "cat": "模型与产品",
      "sub": "榜单",
      "status": "收件箱",
      "title": "Gemini 4 Argon 登顶 LMSys Text Arena 1525 分、Vals 企业榜第一",
      "summary": "Gemini 4 Argon 在 LMSys Text Arena 拿 1525 分登顶，并在 Vals Index 金融/编程/法律榜全球第一，百万 token 上下文，尝鲜价 $2/$10（11/30 后恢复 $4/$20）。",
      "detail": "Google 内部 Antigravity 平台显示 Argon 使智能体代码提交量提升超 35%、回滚率降近 1/3，并协助 Chrome 团队从 Chromium 4000 万行中剥离约 600 万行遗留模块。它重塑了文本侧 Pareto 前沿。",
      "source": "ReconScribe / LMSys",
      "url": "https://reconscribe.com/ai-leaderboard",
      "date": "2026-10-29",
      "tags": {
        "模态": ["多模态"],
        "任务": ["推理", "生成"],
        "来源": ["官网"],
        "优先级": ["参考"]
      }
    },
    {
      "cat": "模型与产品",
      "sub": "定价",
      "status": "值得追踪",
      "title": "DeepSeek V4.1 Flash 开源高性价比：峰时 $0.30/$1.20",
      "summary": "DeepSeek V4.1 Flash 标准价 off-peak $0.15/$0.60，峰时 $0.30/$1.20，1M 上下文、开放权重，Vals 综合榜开源第一梯队。",
      "detail": "成本敏感型批量调用首选；彭博报道中美顶尖模型差距从年初 15% 收窄至 3%，DeepSeek 是关键拉近距离的开源力量。与其配合，Claude Haiku 5.5 可作检索子智能体，形成低成本全天候后台工作流。",
      "source": "Santage / DeepSeek",
      "url": "https://santageai.com/learn/research/llm-comparison",
      "date": "2026-10-29",
      "tags": {
        "模态": ["文本"],
        "任务": ["生成", "推理"],
        "来源": ["官网"],
        "优先级": ["必读"]
      }
    },
    {
      "cat": "模型与产品",
      "sub": "定价",
      "status": "收件箱",
      "title": "国产价格战白热化：MiniMax M3.1-Flash $0.15/$0.6，Qwen3.8-Max $2/$6",
      "summary": "10 月榜单显示 MiniMax M3.1-Flash 输入 $0.15/输出 $0.6，Qwen3.8-Max $2/$6，Upstage Solar Pro 4 也降到 $0.15/$0.60，中低端 API 价格基本贴地。",
      "detail": "SuperCLUE 国产四强 Qwen3.8-Max(72.62)、DeepSeek V4.1 Flash(71.81)、GLM-5.3(71.29)、Kimi K3(70.68) 持续逼近；竞争焦点从跑分转向长上下文与多模态，价格已不再是选型的唯一变量。",
      "source": "ReconScribe / SuperCLUE",
      "url": "https://reconscribe.com/ai-leaderboard",
      "date": "2026-10-29",
      "tags": {
        "模态": ["文本"],
        "任务": ["生成", "推理"],
        "来源": ["官网"],
        "优先级": ["参考"]
      }
    },
    {
      "cat": "模型与产品",
      "sub": "多模态",
      "status": "收件箱",
      "title": "xAI Grok Voice 3.0 语音榜 86.9 登顶，接管 Starlink 客服",
      "summary": "xAI Grok Voice 3.0 在 Artificial Analysis 语音榜 86.9 分全球第一（超 GPT-Live-1 的 83.2），首字音频延迟仅 0.81 秒；已接管 Starlink 客服每日 2 万通电话约 70% 无需人工。",
      "detail": "Grok 4.7 定价 $2/$6（fast 翻倍），实时 X 数据原生。语音首字延迟与自愈率让它成为语音 Agent 商业化标杆，也提示『语音客服自由』这一场景已率先跑通 ROI。",
      "source": "ReconScribe / xAI",
      "url": "https://reconscribe.com/ai-leaderboard",
      "date": "2026-10-29",
      "tags": {
        "模态": ["音频", "文本"],
        "任务": ["Agent", "生成"],
        "来源": ["官网"],
        "优先级": ["参考"]
      }
    },
    {
      "cat": "模型与产品",
      "sub": "大模型",
      "status": "收件箱",
      "title": "Z.ai GLM-5.3 744B 开放权重，国产开源旗舰再扩容",
      "summary": "GLM-5.3 总参数 7440 亿、每 token 激活约 400 亿，开放权重；SuperCLUE 智能指数 71.29，居国产开源前列，其网络能力被 Anthropic 列为当前最强开源。",
      "detail": "与 Qwen3.8-Max、DeepSeek V4.1 Flash、Kimi K3 共同构成国产第一梯队。Anthropic 安全评估点名其 cyber-capability，说明开源前沿模型的安全边界正被重新讨论，开源与监管的对齐成为新议题。",
      "source": "Z.ai / SuperCLUE",
      "url": "https://www.superclueai.com/static/fewclue.html",
      "date": "2026-10-29",
      "tags": {
        "模态": ["文本"],
        "任务": ["推理", "生成"],
        "来源": ["官网"],
        "优先级": ["必读"]
      }
    },
    {
      "cat": "模型与产品",
      "sub": "大模型",
      "status": "收件箱",
      "title": "Mistral Large 4 万亿参数开源，160+ 语言覆盖",
      "summary": "Mistral Large 4 预览版月底开放权重：万亿总参数、490 亿激活、原生多模态，训练语料覆盖 160+ 自然语言，定位企业级多语种场景。",
      "detail": "与 DeepSeek、Qwen、GLM 共同把开源旗舰推到万亿级；对需要多语种支持（尤其欧洲市场）与数据本地化的企业是闭源模型之外的务实替代。",
      "source": "Mistral / OriginBrief",
      "url": "https://www.originbrief.app/en/reports/ai-industry-overview/2026-10-26/weekly",
      "date": "2026-10-29",
      "tags": {
        "模态": ["多模态"],
        "任务": ["生成", "推理"],
        "来源": ["官网"],
        "优先级": ["参考"]
      }
    },
    {
      "cat": "工具与开源",
      "sub": "框架",
      "status": "值得追踪",
      "title": "anthropics/skills：Agent Skills 标准仓库登顶 GitHub 热门",
      "summary": "GitHub 热门榜 anthropics/skills（约 184k⭐）成为 Agent Skills 公共仓库；该标准自 2025/12 发布后已被 ChatGPT、Cursor、GitHub Copilot、VS Code 等 70+ 平台集成，累计发布 100 万技能、安装近 2.8 亿次。",
      "detail": "Skills 把『可复用能力』标准化为 SKILL.md，是 Agent 生态的『npm』。Anthropic 10/22 把它捐给 Agentic AI Foundation，意味着跨平台技能分发成为行业基础设施，本工作台『教程与案例』里的技能写法正对应此标准。",
      "source": "GitHub",
      "url": "https://github.com/anthropics/skills",
      "date": "2026-10-29",
      "tags": {
        "模态": ["文本"],
        "任务": ["Agent"],
        "来源": ["GitHub"],
        "优先级": ["必读"]
      }
    },
    {
      "cat": "工具与开源",
      "sub": "部署工具",
      "status": "收件箱",
      "title": "NVIDIA OpenShell：自主 Agent 的私有安全运行时",
      "summary": "NVIDIA OpenShell 是面向自主 AI Agent 的安全私有运行时，GitHub trending 单日 +600；为 Agent 执行提供 OS 级的文件系统与网络限制，无需容器。",
      "detail": "随着 Agent 从原型走向生产，『可信执行边界』成为新基础设施层。它与 anthropics/sandbox-runtime、thedotmack/claude-mem 一道，构成 记忆—沙箱—运行时 的 Agent 安全三件套。",
      "source": "GitHub",
      "url": "https://github.com/NVIDIA/OpenShell",
      "date": "2026-10-29",
      "tags": {
        "模态": ["文本"],
        "任务": ["Agent"],
        "来源": ["GitHub"],
        "优先级": ["参考"]
      }
    },
    {
      "cat": "工具与开源",
      "sub": "框架",
      "status": "收件箱",
      "title": "gemini-cli：把 Gemini 带进终端的开源 Agent",
      "summary": "google-gemini/gemini-cli 把 Gemini 直接带进终端，开源 AI Agent，支持代码理解、文件操作与工具调用，GitHub 周榜高位。",
      "detail": "与 Claude Code、Codex 同属终端 Agent 路线，背靠 Google 生态与免费额度。新手可用它体验『让 AI 直接改我的代码库』，是理解 Agentic Coding 最低门槛的入口之一。",
      "source": "GitHub",
      "url": "https://github.com/google-gemini/gemini-cli",
      "date": "2026-10-29",
      "tags": {
        "模态": ["文本"],
        "任务": ["Agent", "理解"],
        "来源": ["GitHub"],
        "优先级": ["参考"]
      }
    },
    {
      "cat": "工具与开源",
      "sub": "部署工具",
      "status": "收件箱",
      "title": "ollama/ollama：本地跑大模型的事实标准（184k⭐）",
      "summary": "ollama 是轻量 CLI，一行命令在本地运行 Qwen、DeepSeek、GLM 等开源大模型，易用性与模型支持使其成为本地推理事实标准（约 184k⭐）。",
      "detail": "对想零成本、隐私不出本机体验模型的用户，Ollama 是第一步。配合 Open WebUI 即可获得类 ChatGPT 界面；本工作台『AI学习』里的『本地跑模型第一步』正基于此。",
      "source": "GitHub",
      "url": "https://github.com/ollama/ollama",
      "date": "2026-10-29",
      "tags": {
        "模态": ["文本"],
        "任务": ["生成", "推理"],
        "来源": ["GitHub"],
        "优先级": ["必读"]
      }
    },
    {
      "cat": "工具与开源",
      "sub": "框架",
      "status": "收件箱",
      "title": "langgenius/dify：一站式 Agent 与 RAG 工作流平台",
      "summary": "Dify（约 160k⭐）在同一协作空间内构建 Agentic 工作流与 RAG 管线，支持丰富模型与工具，可云、VPC 或自托管，从原型到生产无需重建技术栈。",
      "detail": "对想把 AI 能力嵌进业务、又不想从零搭后端的中小团队，Dify 是把『想法』变成『内部可用应用』的最短路径之一；与 Langflow、LangChain 同属低代码 Agent 搭建层。",
      "source": "GitHub",
      "url": "https://github.com/langgenius/dify",
      "date": "2026-10-29",
      "tags": {
        "模态": ["文本"],
        "任务": ["Agent", "RAG"],
        "来源": ["GitHub"],
        "优先级": ["参考"]
      }
    },
    {
      "cat": "工具与开源",
      "sub": "框架",
      "status": "值得追踪",
      "title": "huggingface/transformers：文本/视觉/音频/多模态统一框架（168k⭐）",
      "summary": "Transformers（约 168k⭐）是覆盖文本、视觉、音频与多模态 SOTA 模型的统一定义框架，兼推理与训练，是『AI 界的 GitHub』核心库。",
      "detail": "从 pipeline(\"text-generation\") 三行跑模型，到微调自己的分类器，Transformers 是新手从『用 ChatGPT』跨到『写 AI 应用』的关键一步；Hugging Face 还提供免费课程与 Spaces 托管。",
      "source": "GitHub",
      "url": "https://github.com/huggingface/transformers",
      "date": "2026-10-29",
      "tags": {
        "模态": ["多模态"],
        "任务": ["生成", "理解"],
        "来源": ["GitHub"],
        "优先级": ["必读"]
      }
    },
    {
      "cat": "工具与开源",
      "sub": "开源项目",
      "status": "收件箱",
      "title": "Agent-Reach 与 firecrawl：给 Agent 装上『眼睛』和『手』",
      "summary": "Panniantong/Agent-Reach（约 101k⭐）让 Agent 零 API 成本浏览 Twitter/Reddit/GitHub 等；firecrawl/firecrawl（约 195k⭐）为 Agent 大规模抽取结构化网页数据，是实时情报关键使能器。",
      "detail": "Agent 要『主动上网』缺不了这两类工具：Agent-Reach 解决『看得见』，firecrawl 解决『抓得净』。配合 RAG 与记忆，即可搭建持续追踪某主题的自动化情报工作流。",
      "source": "GitHub / Agents-Radar",
      "url": "https://github.com/Panniantong/Agent-Reach",
      "date": "2026-10-29",
      "tags": {
        "模态": ["文本"],
        "任务": ["Agent", "RAG"],
        "来源": ["GitHub"],
        "优先级": ["参考"]
      }
    },
    {
      "cat": "教程与案例",
      "sub": "Prompt模板",
      "status": "待读",
      "title": "Prompt Engineering Guide — 提示工程权威指南",
      "summary": "promptingguide.ai 汇集提示工程、上下文工程、RAG、AI Agent 的指南/论文/课程/笔记本，社区维护活跃，系统学 Prompt 的首选入口。",
      "detail": "从基础 prompting 到 context engineering 进阶全覆盖，中英双语、MDX 编写。想系统建立提示词与上下文工程知识体系应收藏；与 CRISPE 等框架互补。",
      "source": "官网",
      "url": "https://www.promptingguide.ai/",
      "date": "2026-10-29",
      "tags": {
        "模态": ["文本"],
        "任务": ["生成", "RAG"],
        "来源": ["官网"],
        "优先级": ["必读"]
      }
    },
    {
      "cat": "教程与案例",
      "sub": "Prompt模板",
      "status": "待读",
      "title": "CRISPE 六维提示词框架：角色/任务/背景/指令/风格/样例",
      "summary": "CRISPE 用 C(能力角色) R(任务) I(背景) S(指令) P(语气) E(样例与边界) 六维组织提示词，配可直接套用业务模板。",
      "detail": "对零基础用户，框架把『怎么写提示词』变成填空；辅以 Few-Shot 与 CoT 可将复杂任务准确率从 60% 稳定到 95% 以上，是落地提效的实操起点。",
      "source": "技能提升网",
      "url": "https://jinengtisheng.com/73087.html",
      "date": "2026-10-29",
      "tags": {
        "模态": ["文本"],
        "任务": ["生成"],
        "来源": ["公众号"],
        "优先级": ["必读"]
      }
    },
    {
      "cat": "教程与案例",
      "sub": "课程",
      "status": "必读",
      "title": "DataWhale hello-agents《从零开始构建智能体》",
      "summary": "开源中文教程《从零开始构建智能体》覆盖 Agent 原理到实践，GitHub 约 85k⭐，含 ReAct、工具调用、记忆与多 Agent 协作可运行代码。",
      "detail": "对想系统学 Agent 工程的新手是优质免费资源；从范式理解到代码落地一气呵成，适合作为入门第一课。配合本工作台『AI学习』的新手路线图第④步。",
      "source": "GitHub",
      "url": "https://github.com/datawhalechina/hello-agents",
      "date": "2026-10-29",
      "tags": {
        "模态": ["文本"],
        "任务": ["Agent"],
        "来源": ["GitHub"],
        "优先级": ["必读"]
      }
    },
    {
      "cat": "教程与案例",
      "sub": "工作流",
      "status": "收件箱",
      "title": "ExplainX：从第一条 Prompt 到上线 Agent 的 8 阶段动手路线图",
      "summary": "ExplainX 给出 8 阶段实操路线：首 prompt → 结构化提示 → 系统提示 → 工作流 → Claude Code 工具 → MCP → 技能 → 无人值守循环，每阶段配一个真实项目。",
      "detail": "核心理念是『做，而非只读』：每个阶段都该产出一个可运行的东西，并写日志、做检查点、不可逆操作前需确认。Dartmouth 的 Phosphor 研究也佐证——AI 评分的书写练习带来真实学习增益，被动聊天则没有。",
      "source": "ExplainX",
      "url": "https://www.explainx.ai/blog/how-to-learn-ai-beginner-to-expert-roadmap-2026",
      "date": "2026-10-29",
      "tags": {
        "模态": ["文本"],
        "任务": ["Agent"],
        "来源": ["官网"],
        "优先级": ["参考"]
      }
    },
    {
      "cat": "教程与案例",
      "sub": "教程",
      "status": "收件箱",
      "title": "Albert Workflow — 中文 AI 工作流从入门到进阶路径",
      "summary": "albertworkflow.com 提供 AI 工作流中文教程，覆盖从单点工具使用到业务工作流搭建的完整学习路径。",
      "detail": "面向想把 AI 从单次对话跨越到自动化流水线的从业者；强调把原有流程切开、识别可由模型承接的环节，再固化成 SOP，可迁移到任何岗位。",
      "source": "官网",
      "url": "https://www.albertworkflow.com/",
      "date": "2026-10-29",
      "tags": {
        "模态": ["文本"],
        "任务": ["Agent"],
        "来源": ["官网"],
        "优先级": ["灵感"]
      }
    },
    {
      "cat": "教程与案例",
      "sub": "课程",
      "status": "待读",
      "title": "Anthropic Claude Frontier Academy：1 亿美元培训 1 万前沿工程师",
      "summary": "Anthropic 投入 1 亿美元启动 Frontier Academy，目标 2027 年底前培训 1 万名 Frontier Deployed Engineers，首批来自埃森哲/德勤/摩根士丹利等。",
      "detail": "面向企业的 Agent 工程实战培训，区别于普通开发者课程；是观察前沿 AI 工程师能力标准成型的重要信号，也暗示企业侧 Agent 落地人才缺口。",
      "source": "OriginBrief / Anthropic",
      "url": "https://www.originbrief.app/en/reports/ai-industry-overview/2026-10-26/weekly",
      "date": "2026-10-29",
      "tags": {
        "模态": ["文本"],
        "任务": ["Agent"],
        "行业": ["金融", "医疗"],
        "来源": ["官网"],
        "优先级": ["参考"]
      }
    },
    {
      "cat": "公司与人物",
      "sub": "创业公司",
      "status": "值得追踪",
      "title": "大厂人才离职创业潮：林俊旸、胡瀚、李宽密集下场",
      "summary": "投资界梳理：前阿里通义林俊旸创办语用科技（天使 2.2 亿美元、估值 20 亿），前腾讯混元胡瀚办 Winverse AI，前阿里 DeepResearch 李宽创业 UniPat（红杉孵化、估值 25 亿）。",
      "detail": "多名创始人在正式离职前已敲定融资，口头 TS 早于离职信；反映顶尖 AI 人才从大厂向创业公司迁徙，估值常以人名定价。与 DeepSeek 领投 Winverse 形成呼应。",
      "source": "投资界 / 今日头条",
      "url": "https://www.toutiao.com/article/7700893706739647026",
      "date": "2026-10-29",
      "tags": {
        "模态": ["文本"],
        "任务": ["理解"],
        "来源": ["X"],
        "优先级": ["必读"]
      }
    },
    {
      "cat": "公司与人物",
      "sub": "投资人",
      "status": "值得追踪",
      "title": "梁文锋/DeepSeek 拟领投 Winverse AI，给机器人造大脑",
      "summary": "DeepSeek 计划投资胡瀚创办的 Winverse AI（估值约 4 亿美元），主攻具身智能大模型；梁文锋近期密集接触具身赛道创业者。",
      "detail": "Winverse AI 偏底层基础设施与模型加速，与 DeepSeek 技术路线同频；继 8 月参与宇树科技 IPO 后，DeepSeek 从本体延伸到大脑，补齐具身拼图。",
      "source": "网易 / 证券时报",
      "url": "https://www.163.com/dy/article/L94L80BV053469RG.html",
      "date": "2026-10-29",
      "tags": {
        "模态": ["文本"],
        "任务": ["理解"],
        "来源": ["X"],
        "优先级": ["必读"]
      }
    },
    {
      "cat": "公司与人物",
      "sub": "创业者",
      "status": "收件箱",
      "title": "Recursive 6.5 亿美元融资，递归自我改进从理论走向产品",
      "summary": "由田渊栋等联合创办的 Recursive 走出隐身即获 6.5 亿美元融资，用 Eureka Machine 递归 AI 自动化模型开发，已产出 Flint 40B 开源编程模型。",
      "detail": "资本押注 RSI（递归自我改进）：让 AI 参与改进下一代 AI；8 位联创均有独立负责大型 AI 项目的经历，是 AI 创业人才密度高峰的典型。",
      "source": "OriginBrief / Wired",
      "url": "https://www.originbrief.app/en/reports/ai-industry-overview/2026-10-26/weekly",
      "date": "2026-10-29",
      "tags": {
        "模态": ["文本"],
        "任务": ["微调"],
        "来源": ["X"],
        "优先级": ["必读"]
      }
    },
    {
      "cat": "公司与人物",
      "sub": "投资人",
      "status": "收件箱",
      "title": "投资人警示：AI 创业最大分歧在技术与商业化曲线不同步",
      "summary": "第一财经报道，前阿里副总裁叶军创业刚满百天即焦虑『做的事会不会被下一代模型替代』；泛大西洋周洁指出 AI Native 应用与基础模型边界不清，部分功能或被大厂覆盖。",
      "detail": "行业更看好面向企业的生产力场景（营销销售、编程开发、管理），因客户本就有持续预算。创业者需判断抓的是长期需求还是模型迭代留出的短暂空隙——套壳型应用易被大模型自身能力吞没。",
      "source": "第一财经 / 今日头条",
      "url": "https://www.toutiao.com/article/7700178873685738034",
      "date": "2026-10-29",
      "tags": {
        "模态": ["文本"],
        "任务": ["理解"],
        "来源": ["X"],
        "优先级": ["参考"]
      }
    },
    {
      "cat": "公司与人物",
      "sub": "投资人",
      "status": "收件箱",
      "title": "吴世春：具身智能上半场多表演，市场只为由『真正干活』的产品买单",
      "summary": "梅花创投吴世春在金融街论坛表示，大模型格局已定、资本收敛；具身智能上半场偏表演，下半场重心转向大脑能力与具体场景替代人工，套壳型应用易被大模型覆盖。",
      "detail": "他认为过百亿估值的具身公司已达二十多家，泡沫真实存在但『永远无法出清』；理性投资人应在泡沫中找机会。机器人进岗位需同时具备『大脑（视觉模型）』与『扎实执行』两种能力。",
      "source": "中新经纬 / 今日头条",
      "url": "https://www.toutiao.com/article/7699773081321046591/",
      "date": "2026-10-29",
      "tags": {
        "模态": ["视频"],
        "任务": ["理解", "Agent"],
        "来源": ["X"],
        "优先级": ["参考"]
      }
    },
    {
      "cat": "公司与人物",
      "sub": "创业者",
      "status": "收件箱",
      "title": "98 后 MIT 博士创业『AI4AI』：估值锚从模型转向『人才定价』",
      "summary": "科创板日报报道，98 后 MIT 博士创业『AI4AI』不足半年融数亿元、上海国资连续押注；估值逻辑从模型能力/用户/营收切换为『人才定价』与『期权逻辑』。",
      "detail": "行业核心争议：这是下一代范式拐点还是概念炒作？水木资本唐劲草认为范式在切换但『定价跑在证据前』。ICLR 2026 已开 RSI 专题，阿里/字节/腾讯/智谱都在研发流水线嵌相关能力，技术共识正在形成。",
      "source": "科创板日报",
      "url": "https://www.chinastarmarket.cn/detail/2507465",
      "date": "2026-10-29",
      "tags": {
        "模态": ["文本"],
        "任务": ["微调", "推理"],
        "来源": ["X"],
        "优先级": ["待验证"]
      }
    },
    {
      "cat": "数据与评测",
      "sub": "榜单",
      "status": "值得追踪",
      "title": "SuperCLUE 10/26 更新：Qwen3.8-Max 72.62 居国产第一",
      "summary": "SuperCLUE 10/26 智能指数（数学/科学/Agent编程/指令遵循/幻觉/规划六维）：Qwen3.8-Max 72.62、DeepSeek V4.1 Flash 71.81、GLM-5.3 71.29、Kimi K3 70.68。",
      "detail": "榜单覆盖 18 个模型，国产开源四强持续逼近；同日 SuperCLUE-I2V 图生视频、SuperCLUE-DeepSWE 中文长程 SWE、Terminal 10 月榜均更新。",
      "source": "SuperCLUE",
      "url": "https://www.superclueai.com/static/fewclue.html",
      "date": "2026-10-29",
      "tags": {
        "模态": ["文本"],
        "任务": ["推理"],
        "来源": ["官网"],
        "优先级": ["必读"]
      }
    },
    {
      "cat": "数据与评测",
      "sub": "榜单",
      "status": "必读",
      "title": "Artificial Analysis 智能指数 10 月：Claude Opus 5.5 58 登顶",
      "summary": "Artificial Analysis v4.3.2 综合指数：Claude Opus 5.5 58、Sonnet 5.5 56、GPT-6 Astra 与 Gemini 4 Argon 同 53 并列第五，方法论 agents30%/coding20%/科学20%/general30%。",
      "detail": "是当前最权威综合智能指数之一；各厂商自报分不可直接横比，建议在自有样本实测。国产 DeepSeek V4.1 Flash 已进入开源第一梯队。",
      "source": "Santage / Artificial Analysis",
      "url": "https://santageai.com/learn/research/llm-comparison",
      "date": "2026-10-29",
      "tags": {
        "模态": ["文本"],
        "任务": ["推理"],
        "来源": ["官网"],
        "优先级": ["必读"]
      }
    },
    {
      "cat": "数据与评测",
      "sub": "评测方法",
      "status": "收件箱",
      "title": "temperature2 基准饱和度图：MATH-500 近满分，HLE 仅 61% 待解",
      "summary": "temperature2 汇总 Artificial Analysis 数据：MATH-500 中位 81.7%、最佳 99.4% 近乎解决；GPQA Diamond 最佳 96.3%；而 HLE 最佳仅 61.4%、τ-bench Banking 49% 未解。",
      "detail": "图示清晰标出已被攻克与未来两年头条来源的边界：Humanity's Last Exam、Terminal-Bench Hard、τ-bench Banking 仍是开放前沿，给选型与研究指了方向。",
      "source": "temperature2 / Artificial Analysis",
      "url": "https://temperature2.com/models/benchmarks",
      "date": "2026-10-29",
      "tags": {
        "模态": ["文本"],
        "任务": ["推理"],
        "来源": ["官网"],
        "优先级": ["参考"]
      }
    },
    {
      "cat": "数据与评测",
      "sub": "Leaderboard",
      "status": "收件箱",
      "title": "ARC-AGI-2/3：GPT-6 Astra 95% / 99.9% 领先",
      "summary": "DevelopersDigest 10/17 榜单：ARC-AGI-2 GPT-6 Astra(Max) 95.0%、ARC-AGI-3 99.9% 居首；该基准考察新颖环境探索与持续学习。",
      "detail": "ARC-AGI 系列是抽象推理试金石，GPT-6 Astra 在交互式 ARC-AGI-3 接近满分，但 temperature2 同时显示 HLE、τ-bench 仍远未解决，说明某榜第一不等于通用能力封顶。",
      "source": "Developers Digest",
      "url": "https://www.developersdigest.tech/benchmarks",
      "date": "2026-10-29",
      "tags": {
        "模态": ["文本"],
        "任务": ["推理"],
        "来源": ["官网"],
        "优先级": ["参考"]
      }
    },
    {
      "cat": "数据与评测",
      "sub": "Leaderboard",
      "status": "收件箱",
      "title": "LLM-Stats 综合榜：Claude Opus 5.5 60.4 居首，745+ 基准覆盖",
      "summary": "LLM-Stats 聚合 746 个基准、按能力 TrueSkill 保守评分：Claude Opus 5.5 综合 60.4、Sonnet 5.5 58.4、GPT-6 Astra 58.2、Gemini 4 Argon 55.1 居前。",
      "detail": "它强调『先看综合指数，再看单项 provenance』，覆盖推理/编码/数学/视觉/工具/Agent 等 55 个能力维度，是做横向选型时抵消厂商自报偏差的第三方参照。",
      "source": "LLM-Stats",
      "url": "https://www.llm-stats.com/benchmarks",
      "date": "2026-10-29",
      "tags": {
        "模态": ["文本"],
        "任务": ["推理"],
        "来源": ["官网"],
        "优先级": ["参考"]
      }
    },
    {
      "cat": "数据与评测",
      "sub": "榜单",
      "status": "收件箱",
      "title": "SuperCLUE-I2V 图生视频 & DeepSWE 中文长程 SWE 榜更新",
      "summary": "SuperCLUE 10 月更新图生视频(I2V)竞技场与中文长程软件工程(DeepSWE)榜单，并上线 DeepSeek-V4.1-Flash-1017 盲测。",
      "detail": "视频生成与长程代码工程是今年评测新增重点；中文长程 SWE 榜让国产模型在真实仓库任务上的能力可比，弥补通用指数对『干活』刻画不足。",
      "source": "SuperCLUE",
      "url": "https://www.superclueai.com/homepage",
      "date": "2026-10-29",
      "tags": {
        "模态": ["视频", "文本"],
        "任务": ["生成", "Agent"],
        "来源": ["官网"],
        "优先级": ["灵感"]
      }
    },
    {
      "cat": "AI学习",
      "sub": "学习路线图",
      "status": "值得追踪",
      "title": "30 天免费课程：从『AI 是什么』到『AI Agent』每日一主题",
      "summary": "Synapse 的《Learn AI in 30 Days》把 AI 学习拆成 30 天：第 1 周基础概念、第 2 周 LLM 内部原理、第 3 周提示词与 RAG、第 4 周 Agent 与多模态，每天一个主题配练习。",
      "detail": "对零基础最友好：它不是一堆链接，而是一条按天排好的路径。第 1 周先建立训练/推理/模型这些词的真实含义；第 2 周讲清 token、embedding、attention、context window、temperature；第 3 周教你把 AI 用好；第 4 周跨过聊天进入 Agent。建议作为你的『主线』，每天 30 分钟。配合本工作台『前沿动态』『模型与产品』看新闻会突然看懂。",
      "source": "Synapse",
      "url": "https://learnsynapse.app/learn-ai-in-30-days",
      "date": "2026-10-29",
      "tags": {
        "模态": ["文本"],
        "任务": ["理解", "Agent"],
        "行业": ["教育"],
        "来源": ["官网"],
        "优先级": ["必读"]
      }
    },
    {
      "cat": "AI学习",
      "sub": "学习路线图",
      "status": "值得追踪",
      "title": "5 阶段 25 个免费资源：从机器学习基础到 AI Agent 部署",
      "summary": "AmanXai 整理 25 个免费资源分 5 阶段：①ML 基础 ②LLM 与生成式 AI ③RAG 与提示工程 ④AI Agent ⑤生产级系统，每阶段配项目产出。",
      "detail": "作者最关键的一句话：不要刷课，要在每个里程碑后做一个项目。学完 ML 就建一个 ML 项目；学完 LLM 就跑一个本地 LLM 应用；学完 RAG 就做文档问答；学完 Agent 就实现能用工具的多 Agent 系统。这套『学—做』循环比单纯收藏 25 个链接有效 10 倍。适合想系统化但怕迷路的人。",
      "source": "AmanXai",
      "url": "https://amanxai.com/2026/09/28/25-free-resources-to-learn-ai-llms-and-ai-agents/",
      "date": "2026-10-29",
      "tags": {
        "模态": ["文本"],
        "任务": ["理解", "Agent", "RAG"],
        "行业": ["教育"],
        "来源": ["官网"],
        "优先级": ["必读"]
      }
    },
    {
      "cat": "AI学习",
      "sub": "基础概念",
      "status": "值得追踪",
      "title": "新手必懂的 6 个词：Token / 上下文窗口 / Embedding / Attention / Temperature / 幻觉",
      "summary": "这 6 个词是你看任何 AI 资讯都绕不开的。Token 是模型处理文本最小单位；上下文窗口是模型一次能记住多少 token；Embedding 把文字变数字向量；Attention 让模型联系上下文；Temperature 控制随机性；幻觉是 AI 一本正经说错话。",
      "detail": "举例：为什么一个 emoji 可能花掉你好几个 token、为什么长对话模型会『忘记』前面、为什么 AI 会编造不存在的论文——答案都在这 6 个概念里。建议先花 1 小时把这 6 个词的英文+中文定义各看一遍，之后再看本工作台『前沿动态』『模型与产品』里新闻会突然看懂。可配合 Synapse 30 天课程第 8-14 天。",
      "source": "Synapse / Scaler",
      "url": "https://learnsynapse.app/learn-ai-in-30-days",
      "date": "2026-10-29",
      "tags": {
        "模态": ["文本"],
        "任务": ["理解"],
        "行业": ["教育"],
        "来源": ["官网"],
        "优先级": ["必读"]
      }
    },
    {
      "cat": "AI学习",
      "sub": "入门工具",
      "status": "值得追踪",
      "title": "本地跑大模型第一步：Ollama + Open WebUI，2GB 内存笔记本也能跑",
      "summary": "Ollama 一行命令在本地下载并运行开源大模型（Qwen、Llama、DeepSeek），Open WebUI 给它套一个像 ChatGPT 的网页界面；两者免费、开源、断网可用。",
      "detail": "为什么新手要从本地跑模型开始：①不花钱、不限次、隐私不外传 ②直观感受『模型大小/速度/质量』取舍 ③断网也能用。最小起步：装 Ollama → ollama run qwen2.5:3b → 装 Open WebUI 连上。本工作台『工具与开源』里的 vLLM/llama.cpp 是进阶选项；Ollama 在 GitHub 约 184k⭐。",
      "source": "Ollama / Open WebUI",
      "url": "https://github.com/ollama/ollama",
      "date": "2026-10-29",
      "tags": {
        "模态": ["文本"],
        "任务": ["生成", "推理"],
        "来源": ["GitHub"],
        "优先级": ["必读"]
      }
    },
    {
      "cat": "AI学习",
      "sub": "免费课程",
      "status": "值得追踪",
      "title": "吴恩达《Machine Learning Specialization》—— 还是最好的 ML 入门课",
      "summary": "DeepLearning.AI/Coursera 经典，可免费旁听。Andrew Ng 用最少数学把监督学习、训练/测试、过拟合、评估讲清楚，是无数 AI 工程师启蒙课。",
      "detail": "只想花一个周末建立『机器学习到底是什么』直觉，这是最短路径；已更新到 2026 版，用 Python Notebook 替代早期 MATLAB，不需先学完 Python。学完你会理解本工作台『论文研究』里那些 RAG/Agent 论文为什么这么设计。配套看 3Blue1Brown 神经网络系列补视觉直觉。",
      "source": "DeepLearning.AI / Coursera",
      "url": "https://www.coursera.org/specializations/machine-learning-introduction",
      "date": "2026-10-29",
      "tags": {
        "模态": ["视频", "文本"],
        "任务": ["理解", "微调"],
        "行业": ["教育"],
        "来源": ["官网"],
        "优先级": ["必读"]
      }
    },
    {
      "cat": "AI学习",
      "sub": "免费课程",
      "status": "值得追踪",
      "title": "fast.ai《Practical Deep Learning for Coders》—— 第一课就训出可用模型",
      "summary": "fast.ai 著名自顶向下免费课：第一课就让你训练一个能用的图像分类模型，理论边用边补，2026 版已更新多模态内容。",
      "detail": "和吴恩达『先概念后实操』相反，fast.ai 是『先跑通再理解』。如果你是『看理论就困、动手就兴奋』的人，从这里开始。一节课后你就有能在自己照片上跑的模型，这种正反馈对坚持学习至关重要。学完你会自然理解本工作台『工具与开源』里 Hugging Face Transformers 在干什么。",
      "source": "fast.ai",
      "url": "https://course.fast.ai/",
      "date": "2026-10-29",
      "tags": {
        "模态": ["视频", "图像"],
        "任务": ["微调", "理解"],
        "行业": ["教育"],
        "来源": ["官网"],
        "优先级": ["必读"]
      }
    },
    {
      "cat": "AI学习",
      "sub": "实操入门",
      "status": "值得追踪",
      "title": "Hugging Face Transformers：3 行代码加载并运行一个开源大模型",
      "summary": "Hugging Face 是开源模型中心（『AI 界的 GitHub』），Transformers 库让你用 from transformers import pipeline 三行代码就能跑文本生成、分类、翻译、摘要。",
      "detail": "这是从『用 ChatGPT』跨到『写 AI 应用』的关键一步。最小例子：pipeline(\"text-generation\", model=\"Qwen/Qwen2.5-0.5B\") 就能在电脑上生成文本。Hugging Face 还提供免费课程(hf.co/learn)与免费模型托管(Spaces)。学完本工作台『模型与产品』里的开源模型你都能自己加载试。配合『工具与开源』的 Ollama 是本地跑模型两条路线。",
      "source": "Hugging Face",
      "url": "https://huggingface.co/learn/nlp-course",
      "date": "2026-10-29",
      "tags": {
        "模态": ["文本"],
        "任务": ["生成", "理解"],
        "来源": ["GitHub", "官网"],
        "优先级": ["必读"]
      }
    },
    {
      "cat": "AI学习",
      "sub": "学习路线图",
      "status": "值得追踪",
      "title": "新手学习顺序：先建地图，再看最小实现，最后做自己的工作流",
      "summary": "lamjinlab 提出 6 周顺序：①Happy-LLM 建整体认知 ②minGPT 看最小实现 ③Hugging Face 跑模型调用 ④Hello-Agents 学 Agent 循环 ⑤OpenAI Agents SDK/LangGraph ⑥把重复任务固化成 Skill。",
      "detail": "作者最关键的提醒：大多数人一开始不需要自己训大模型，最有用的第一步是把大模型集成进你的工作流。判断一个项目值不值得学看三点：核心原理能不能讲清、能不能跑真实任务、能不能迁移到你的工作。本工作台『教程与案例』里 DataWhale hello-agents、Prompt Engineering Guide 正好对应第④、⑤步，可配合使用。",
      "source": "lamjinlab",
      "url": "https://lamjinlab.com/blog/ai-learning-roadmap",
      "date": "2026-10-29",
      "tags": {
        "模态": ["文本"],
        "任务": ["Agent", "理解"],
        "行业": ["教育"],
        "来源": ["官网"],
        "优先级": ["必读"]
      }
    }
  ]
};
